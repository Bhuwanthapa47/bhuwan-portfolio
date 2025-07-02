import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 bg-gray-50 dark:bg-gray-900 scroll-mt-20"
        >
            {/* === Left: Profile Image === */}
            <img
                src="/bhuwan.jpg"
                alt="Bhuwan Thapa"
                className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-primary"
            />

            {/* === Right: Text Content === */}
            <div className="text-center md:text-left">
                {/* Heading with colored parts */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-gray-700 dark:text-gray-300">Hi, I am </span>
                    <span className="text-blue-600 dark:text-blue-400">Bhuwan</span>
                </h1>

                {/* Centered Typing Animation below heading */}
                <div className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 text-center md:text-left">
                    <ReactTyped
                        strings={[
                            "Full-Stack Developer",
                            "Spring Boot Enthusiast",
                            "React & Tailwind Builder",
                            "Code + Coffee = ❤️",
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
