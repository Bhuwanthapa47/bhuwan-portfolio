import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-16 px-6 bg-gray-100 dark:bg-gray-900 text-center transition-colors duration-300"
        >
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                Feel free to connect with me or download my resume below.
            </p>

            <div className="flex justify-center gap-6 mb-8 text-2xl">
                <a
                    href="https://github.com/Bhuwanthapa47"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/bhuwan-thapa-218583223/our-linkedin" // <-- Replace with your actual LinkedIn
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 dark:text-blue-400 transition"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="mailto:bhuwanthapa4747@gmail.com"
                    className="text-red-600 hover:text-red-800 dark:text-red-400 transition"
                >
                    <FaEnvelope />
                </a>
            </div>

            <a
                href="/BhuwanThapa_Resume.pdf" // <-- Make sure to put your PDF in public folder
                download
                className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
                📄 Download Resume
            </a>
        </section>
    );
};

export default Contact;
