"use client";

import { MoonStar, Sun, SunriseIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    const newState = !isToggled;
    setIsToggled(newState);
    if (newState) {
      document.documentElement.classList.add("dark"); // Example class
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Dynamically add/remove a class to the <html> or <body> tag

  return (
    <button onClick={handleToggle} className="p-2 text-black rounded">
      <span> {isToggled ? <Sun /> : <MoonStar />}</span>
    </button>
  );
}
