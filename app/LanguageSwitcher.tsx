"use client";

import { useEffect, useState } from "react";

type Mode = "both" | "ja" | "en";

export default function LanguageSwitcher() {
  const [mode, setMode] = useState<Mode>("both");

  useEffect(() => {
    const saved = (localStorage.getItem("audaisuki-language") as Mode | null) || "both";
    setMode(saved);
    document.documentElement.dataset.language = saved;
    document.documentElement.lang = saved === "ja" ? "ja" : "en";
  }, []);

  const change = (next: Mode) => {
    setMode(next);
    localStorage.setItem("audaisuki-language", next);
    document.documentElement.dataset.language = next;
    document.documentElement.lang = next === "ja" ? "ja" : "en";
  };

  return (
    <div className="languageSwitcher" aria-label="Language selector">
      <button className={mode === "ja" ? "active" : ""} onClick={() => change("ja")}>日本語</button>
      <button className={mode === "en" ? "active" : ""} onClick={() => change("en")}>English</button>
      <button className={mode === "both" ? "active" : ""} onClick={() => change("both")}>日本語 + English</button>
    </div>
  );
}
