"use client";
import useDarkModeStore from "@/stores/useDarkModeStore";
import { Moon, Sun } from "lucide-react";
import React, { useEffect } from "react";

const DarkModeToggle = () => {
  const { isDarkMode, setDarkMode } = useDarkModeStore();
  useEffect(() => {
    // Verifica se o usuário já tem uma preferência salva
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);

    // Aplica a classe ao body
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setDarkMode(newDarkMode);

    // Converte o boolean para string antes de salvar no localStorage
    if (localStorage) localStorage.setItem("darkMode", newDarkMode.toString());

    // Aplica ou remove a classe dark do elemento html
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-secondary dark:bg-darkSecondaryBackground text-primary dark:text-gray-200 hover:bg-primary hover:bg-opacity-30 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110"
    >
      {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}{" "}
    </button>
  );
};

export default DarkModeToggle;
