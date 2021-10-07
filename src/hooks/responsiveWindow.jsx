import { useCallback, useEffect, useMemo, useState } from 'react';

const DESKTOP_MIN = [1280, 720];

const useResponsiveWindow = () => {
    const [width, setWidth] = useState('null');
    const [height, setHeight] = useState('null');

    const handleWindowResize = useCallback((e) => {
            setWidth(window.innerWidth);
            setHeight(window.innerWidth);
    }, []);
    
    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const isDesktop = useMemo(() => width >= DESKTOP_MIN[0] && height >= DESKTOP_MIN[1], [width, height]);
    return {
        width,
        height,
        isDesktop
    };
};

export default useResponsiveWindow;