'use client';

import React, { useState, useEffect } from 'react';

const ButtonTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Check to see if the window is scrolled more than 500px
    const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-primary text-white rounded-lg font-medium drop-shadow w-8 h-8 fixed bottom-5 right-5 z-50 text-2xl"
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default ButtonTop;
