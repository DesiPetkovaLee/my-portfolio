import React, { useEffect, useState } from "react";

const EMOJIS = ["✨","🧩","💜","🤍","7️⃣","4️⃣","9️⃣","0️⃣","9️⃣","🔟","2️⃣","🕖"];

// tune where inside the image the burst should start
// (as a fraction of the desk image's width/height)
const FOCUS_X = 0.55; 
const FOCUS_Y = 0.38; 

export default function FloatingEmojis({ isActive, sourceRef, count = 7 }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!isActive) { setItems([]); return; }

    const rect = sourceRef?.current?.getBoundingClientRect();

    // origin point, roughly where the laptop is)
    const originX = rect ? rect.left + rect.width  * FOCUS_X : window.innerWidth  * 0.70;
    const originY = rect ? rect.top  + rect.height * FOCUS_Y : window.innerHeight * 0.45;

    const created = Array.from({ length: count }).map((_, i) => {
      // tight cluster at the start
      const jitterX = (Math.random() - 0.5) * 24; 
      const jitterY = (Math.random() - 0.5) * 14; 

      // gentle sideways drift + rise
      const driftX = (Math.random() - 0.5) * 140; 
      const rise   = 320 + Math.random() * 120;  

      return {
        id: `${Date.now()}-${i}`,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        style: {
          position: "absolute",
          left: `${originX + jitterX}px`,
          top:  `${originY + jitterY}px`,
          animationDelay: `${Math.random() * 0.25}s`,
          animationDuration: `${4.6 + Math.random() * 0.6}s`,
          // custom values the CSS animation will use
          ["--dx"]: `${driftX}px`,
          ["--dy"]: `${-rise}px`,
        },
      };
    });

    setItems(created);

    const t = setTimeout(() => setItems([]), 6000); 
    return () => clearTimeout(t);
  }, [isActive, sourceRef, count]);

  return (
    <div className="floating-emojis-container">
      {items.map(({ id, emoji, style }) => (
        <div key={id} className="floating-emoji" style={style}>
          {emoji}
        </div>
      ))}
    </div>
  );
}

