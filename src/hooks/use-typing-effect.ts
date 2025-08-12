import { useEffect, useRef, useState } from "react";

export function useTypingEffect(
  phrases: string[],
  typingSpeed = 100,
  pauseBetween = 1200
) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [text, setText] = useState("");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!phrases.length) return;

    if (!deleting && subIndex === phrases[index].length) {
      timeoutRef.current = window.setTimeout(() => setDeleting(true), pauseBetween);
      return () => clearTimeout(timeoutRef.current!);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    timeoutRef.current = window.setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(phrases[index].substring(0, subIndex + (deleting ? -1 : 1)));
    }, deleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeoutRef.current!);
  }, [phrases, index, subIndex, deleting, typingSpeed, pauseBetween]);

  useEffect(() => {
    const blinkInterval = window.setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return `${text}${blink ? "|" : "\u00A0"}`;
}
