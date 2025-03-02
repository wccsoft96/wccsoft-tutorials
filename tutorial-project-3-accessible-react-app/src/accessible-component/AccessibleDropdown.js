import React, { useState } from "react";

const AccessibleDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle keyboard events for the dropdown button
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // Prevent default behavior (e.g., page scroll on Space)
      setIsOpen(!isOpen);
    } else if (e.key === "Escape") {
      setIsOpen(false); // Close dropdown on Escape key
    }
  };

  // Handle clicks outside the dropdown to close it
  const handleClickOutside = (e) => {
    if (!e.target.closest(".dropdown")) {
      setIsOpen(false);
    }
  };

  // Add event listener for clicks outside the dropdown
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        Menu
      </button>
      {isOpen && (
        <ul id="dropdown-menu" role="menu" tabIndex={-1} aria-label = "Menu">
          <li role="menuitem" tabIndex={0} aria-label="Option 1">
            Option 1
          </li>
          <li role="menuitem" tabIndex={0} aria-label="Option 2">
            Option 2
          </li>
        </ul>
      )}
    </div>
  );
};

export default AccessibleDropdown;
