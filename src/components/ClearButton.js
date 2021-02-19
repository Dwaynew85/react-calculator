import React from 'react';
import './ClearButton.css';

export default function ClearButton({ children, handleClear }) {
    return (
        <div 
            className="clear-btn"
            onClick={() => handleClear()}    
        >
            {children}
        </div>
    )
}
