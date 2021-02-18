import React from 'react';
import './ClearButton.css';

export default function ClearButton({ children }) {
    return (
        <div className="clear-btn">
            {children}
        </div>
    )
}
