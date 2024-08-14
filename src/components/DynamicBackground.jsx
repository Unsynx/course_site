import './css/DynamicBackground.css'
import { useState, useEffect } from 'react'

//https://medium.com/@samantha.n.cabrera/parallax-effect-in-react-step-by-step-e6ed68cb4e5e
const DynamicBackground = ({ height_vh }) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div 
            className="backdrop" 
            style={{ transform: `translateY(${scrollY * 0.5}px)`, height: `${height_vh}vh` }}
        />
    );
};

export default DynamicBackground;
