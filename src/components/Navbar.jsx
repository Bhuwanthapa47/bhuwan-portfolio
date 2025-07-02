import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-50">
            <div className="text-2xl font-bold">Bhuwan Thapa</div>
            <div className="flex gap-6 text-sm font-medium">
                <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
                <a href="#about" className="hover:text-blue-500 transition">About</a>
                <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
                >
                    {darkMode ? "☀" : "🌙"}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
