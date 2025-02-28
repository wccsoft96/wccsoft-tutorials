import React from 'react';

const AccessibleButton = ({ onClick, children }) => {
  return (
    <button
    onClick={onClick}
    className='accessible-button'      
      aria-label={children} // For screen readers
      tabIndex={0} // Make it focusable
    >
      {children}
    </button>
  );
};

export default AccessibleButton;