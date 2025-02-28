import React, { useState } from 'react';

const AccessibleDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
       className='dropdown-button'
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen} // Indicates if dropdown is open
        aria-haspopup="true" // Indicates the button controls a dropdown
      >
        Menu
      </button>
      {isOpen && (
        <ul role="menu">
          <li role="menuitem">Option 1</li>
          <li role="menuitem">Option 2</li>
        </ul>
      )}
    </div>
  );
};

export default AccessibleDropdown;