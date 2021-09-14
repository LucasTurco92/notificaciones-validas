import { useState, useEffect } from 'react';

const useScroll = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const refY = () => offsetY;


    return { refY };
}

export default useScroll;