import { useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import "./Navbar.css"; // Import the CSS file

export function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <nav className="Navbar">
      <p>Where in the world?</p>
      <div onClick={toggle} className="toggle">
        {isToggled ? (
          <MdOutlineDarkMode
            size="2.5rem"
            color={isToggled ? "black" : "white"}
          />
        ) : (
          <MdOutlineLightMode
            size="2.5rem"
            color={isToggled ? "black" : "white"}
          />
        )}
        <p style={{ color: isToggled ? "black" : "var(--White)" }}>
          {isToggled ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </nav>
  );
}
