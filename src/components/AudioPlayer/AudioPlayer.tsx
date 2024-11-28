import React, { useState, useRef, useEffect } from "react";
import Icon from "../Icon/Icon";
import { motion, AnimatePresence } from "framer-motion";

export interface AudioPlayerProps {
  audioSrc: string;
  text?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc, text }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerActive, setIsPlayerActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.25); // Default volume at 25%
  const [isMuted, setIsMuted] = useState(false); // Mute state
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle volume changes
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setIsMuted(newVolume === 0); // Update mute state when volume is set to 0
    }
  };

  // Play/Pause toggle
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlayerActive(false); // Hide player when paused
      } else {
        audioRef.current.play();
        setIsPlayerActive(true); // Show player when playing
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update current time as the audio plays
  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Set duration when metadata is loaded
  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Toggle player visibility and audio playback when text is clicked
  const handleTextClick = () => {
    if (isPlayerActive) {
      // If player is active, stop audio, hide player and reset state
      audioRef.current?.pause();
      setIsPlayerActive(false);
      setIsPlaying(false);
      setCurrentTime(0); // Reset the current time when hiding player
    } else {
      // If player is not active, show player and play audio
      setIsPlayerActive(true);
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  // Mute/Unmute toggle
  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        // Unmute: Set the volume back to previous value
        audioRef.current.volume = volume;
      } else {
        // Mute: Set the volume to 0
        audioRef.current.volume = 0;
      }
      setIsMuted(!isMuted); // Toggle mute state
    }
  };

  useEffect(() => {
    if (!audioRef.current) return;

    // Initialize audio volume
    audioRef.current.volume = volume;

    // Event listeners
    audioRef.current.addEventListener("timeupdate", updateTime);
    audioRef.current.addEventListener("loadedmetadata", onLoadedMetadata);

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateTime);
        audioRef.current.removeEventListener(
          "loadedmetadata",
          onLoadedMetadata
        );
      }
    };
  }, [volume]); // Dependency on volume

  // Format time in MM:SS format
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      {/* Static text to start/stop playing audio */}
      <button
        onClick={handleTextClick}
        className="cursor-pointer text-slate-800 hover:text-slate-500"
      >
        {text && (
          <span className="text-3xl md:text-5xl font-wrap md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 font-hoves-extended-extralight">
            {isPlayerActive && isPlaying ? "Pause" : text}
          </span>
        )}
      </button>

      {/* Audio player */}
      <AnimatePresence>
        {isPlayerActive && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="fixed bottom-0 left-0 w-full bg-gray-900 text-white shadow-lg flex items-center py-1 px-6 z-50"
          >
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="text-2xl md:text-3xl p-1 bg-gray-800 hover:bg-gray-700 rounded-full mr-4 focus:outline-none"
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
            >
              {isPlaying ? (
                <Icon name="stop" className="text-white h-3 w-3" />
              ) : (
                <Icon name="play" className="text-white h-3 w-3" />
              )}
            </button>

            {/* Time Progress */}
            <div className="flex-grow flex items-center">
              <span className="text-xs md:text-sm text-gray-400 mr-3">
                {formatTime(currentTime)}
              </span>
              <div className="relative flex-grow h-1 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-green-500"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
              </div>
              <span className="text-xs md:text-sm text-gray-400 ml-3">
                {formatTime(duration)}
              </span>
            </div>

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="text-2xl md:text-3xl p-1 bg-gray-800 hover:bg-gray-700 rounded-full ml-2 focus:outline-none"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              <Icon
                name={isMuted ? "mute" : "volumeUp"}
                className="text-white h-3 w-3"
              />
            </button>

            {/* Volume Control */}
            <div className="flex items-center ml-1">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume} // Set the slider to 0 when muted
                onChange={handleVolumeChange}
                className="w-24 h-1 bg-gray-700 rounded-full"
                disabled={isMuted} // Disable the volume slider when muted
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onEnded={() => {
          setIsPlaying(false); // Stop audio when finished
          setIsPlayerActive(false); // Hide player when audio ends
        }}
      >
        <track kind="captions" />
      </audio>
    </>
  );
};
