import { useState, useEffect } from "react";

export function useTypewriter(texts: string[], speed = 50, delay = 1000) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (subIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
        setDisplayText(texts[index].slice(0, subIndex + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setSubIndex(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [subIndex, index, texts, speed, delay]);

  return displayText;
}
