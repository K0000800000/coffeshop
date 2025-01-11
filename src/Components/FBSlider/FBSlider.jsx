import React, { useState } from 'react';
import './FBSlider.css';

export const FBSlider = ({ feedbacks }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const minSwipeDistance = 50;
        if (distance > minSwipeDistance) {
            handleSlideChange((currentSlide + 1) % feedbacks.length);
        } else if (distance < -minSwipeDistance) {
            handleSlideChange((currentSlide - 1 + feedbacks.length) % feedbacks.length);
        }
        setTouchStart(null);
        setTouchEnd(null);
    };

    const handleMouseDown = (e) => {
        setTouchStart(e.clientX);
    };

    const handleMouseMove = (e) => {
        setTouchEnd(e.clientX);
    };

    const handleMouseUp = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const minSwipeDistance = 50;
        if (distance > minSwipeDistance) {
            handleSlideChange((currentSlide + 1) % feedbacks.length);
        } else if (distance < -minSwipeDistance) {
            handleSlideChange((currentSlide - 1 + feedbacks.length) % feedbacks.length);
        }
        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <div
            className="slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {feedbacks.map((feedback, index) => (
                    <div key={index} className="slide">
                        <p>{feedback.comment}</p>
                        <h3 className="user-name">{feedback.name}</h3>
                    </div>
                ))}
            </div>
            <div className="slider-buttons">
                {feedbacks.map((_, index) => (
                    <button
                        key={index}
                        className={`slider-button ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => handleSlideChange(index)}
                    >
                    </button>
                ))}
            </div>
        </div>
    );
};