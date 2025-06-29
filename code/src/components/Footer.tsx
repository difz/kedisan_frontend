import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
            <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
            <p className="text-xs mt-2">
            Designed by Your Name
            </p>
        </div>
        </footer>
    );
};

export default Footer;