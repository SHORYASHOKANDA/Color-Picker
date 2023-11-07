import React, { useState, useEffect } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    const handleColorClick = (color) => {
        setSelectedColor(color);
        setIsOpen(false);
    };

    useEffect(() => {
        document.title = 'Task 3';
    }, []);

    return (
        <div className="color-picker-wrapper">
            <h1><center>Color Picker</center></h1>
            <div className="color-picker-container">
                {isOpen && (
                    <div className='color-array'>
                        {colors.map((color, index) => (
                            <div
                                className='color'
                                key={index}
                                onClick={() => handleColorClick(color)}
                                style={{ backgroundColor: color, height: '50px', width: '50px' }}
                            />
                        ))}
                    </div>
                )}
                <button className="btn" onClick={handleButtonClick} style={{ backgroundColor: selectedColor }}>
                    {'Pick a color'}
                </button>
            </div>
        </div>
    );
};

export default ColorPicker;
