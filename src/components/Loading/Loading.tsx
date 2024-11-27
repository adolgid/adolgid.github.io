import styles from "./Loading.module.css";

export default function Loading() {
  const { loadingContainer, loadingSpinner } = styles;
  return (
    <div className={loadingContainer}>
      <div className={loadingSpinner}></div>
    </div>
  );
}
