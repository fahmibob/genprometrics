import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            cursor: "pointer",
            backgroundColor: currentTheme === "dark" ? "#333" : "#fff",
            color: currentTheme === "dark" ? "#fff" : "#333",
            padding: "15px",
            borderRadius: "50%",
            zIndex: 1000,
            boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.15)",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
            height: "50px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 6px 20px 0 rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 4px 14px 0 rgba(0, 0, 0, 0.15)";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
