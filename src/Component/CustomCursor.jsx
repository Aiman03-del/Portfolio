import { useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.setAttribute("data-cursor", "");
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addHoverClass = () => cursor.classList.add("hover");
    const removeHoverClass = () => cursor.classList.remove("hover");

    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, img, h1, svg").forEach((el) => {
      el.setAttribute("data-cursor-hover", ""); // Add this line
      el.addEventListener("mouseenter", addHoverClass);
      el.addEventListener("mouseleave", removeHoverClass);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button, img, h1, svg").forEach((el) => {
        el.removeAttribute("data-cursor-hover");
        el.removeEventListener("mouseenter", addHoverClass);
        el.removeEventListener("mouseleave", removeHoverClass);
      });
      document.body.removeChild(cursor);
    };
  }, []);

  return <div></div>;
};

export default CustomCursor;
