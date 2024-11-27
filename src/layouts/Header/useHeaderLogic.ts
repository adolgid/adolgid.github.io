import { useState } from "react";

export function useHeaderLogic() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return { isMenuOpen, setIsMenuOpen };
}
