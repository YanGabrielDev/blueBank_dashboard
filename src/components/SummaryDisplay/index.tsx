'use client'
import { useState, useEffect } from "react";
import { SummaryDisplayProps } from "./types";

export default function SummaryDisplay({ text }: SummaryDisplayProps) {
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 20; // Velocidade da digitação (ms por letra)

  useEffect(() => {
    setDisplayedText(""); // Resetar ao receber um novo summary

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => {
          const newDisplayText = prev + text.charAt(index)
          if(!text.charAt(index)) return newDisplayText
          return newDisplayText});
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text]);

  return (

    <p className="text-sm whitespace-pre-wrap text-primaryText dark:text-darkSecondaryText">{displayedText}</p>
  );
}
