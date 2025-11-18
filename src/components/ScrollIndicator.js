import React, { useState, useEffect } from "react";

function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Cache l'indicateur après 100px de scroll
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ne pas afficher si on est déjà en bas de la page
  useEffect(() => {
    const checkIfAtBottom = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      if (scrollTop + windowHeight >= documentHeight - 50) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", checkIfAtBottom);
    checkIfAtBottom(); // Check on mount

    return () => window.removeEventListener("scroll", checkIfAtBottom);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        opacity: isVisible ? 0.7 : 0,
        transition: "opacity 0.5s ease-in-out",
        pointerEvents: "none"
      }}
    >
      {/* Style moderne avec flèche vers le bas */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "float 2s ease-in-out infinite"
        }}
      >
        <div
          style={{
            color: "#c770f0",
            fontSize: "0.85rem",
            fontWeight: "500",
            letterSpacing: "1px",
            textTransform: "uppercase",
            opacity: 0.8,
            textShadow: "0 0 10px rgba(199, 112, 240, 0.3)"
          }}
        >
          Scroll
        </div>
        <div
          style={{
            width: "2px",
            height: "30px",
            background: "linear-gradient(to bottom, #c770f0, transparent)",
            animation: "scrollLine 2s ease-in-out infinite"
          }}
        />
        <div
          style={{
            width: "0",
            height: "0",
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: "8px solid #c770f0",
            opacity: 0.8,
            animation: "bounce 2s ease-in-out infinite"
          }}
        />
      </div>

      <style>{`
        @keyframes scrollLine {
          0%, 100% {
            opacity: 0.3;
            transform: scaleY(0.8);
          }
          50% {
            opacity: 1;
            transform: scaleY(1);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }
      `}</style>
    </div>
  );
}

export default ScrollIndicator;
