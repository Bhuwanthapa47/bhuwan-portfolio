import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 py-6 text-center transition-colors duration-300">
            <div className="mb-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                    © {new Date().getFullYear()} Bhuwan Thapa. All rights reserved.
                </p>
            </div>
            <div className="flex justify-center gap-6 text-xl text-gray-600 dark:text-gray-400">
                <a
                    href="https://github.com/Bhuwanthapa47"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://https://www.linkedin.com/in/bhuwan-thapa-218583223/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-300"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://instagram.com/47_bhuvan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 dark:hover:text-pink-300"
                >
                    <FaInstagram />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
