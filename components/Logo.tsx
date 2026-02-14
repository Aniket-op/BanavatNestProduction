import React from 'react';
import logo from '../assets/logo.png';

interface LogoProps {
    className?: string;
    white?: boolean; // Option for white version if needed later
}

const Logo: React.FC<LogoProps> = ({ className = "h-20" }) => {
    return (
        <img
            src={logo}
            alt="BanavatNest Logo"
            className={`object-contain ${className}`}
        />
    );
};

export default Logo;
