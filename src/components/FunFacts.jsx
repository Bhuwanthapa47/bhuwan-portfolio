import React from "react";
import { FaCoffee, FaMusic, FaBug, FaGlobe, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const facts = [
    {
        icon: <FaCoffee size={28} />,
        title: "Coffee Lover",
        description: "I drink 4+ cups of coffee a day to keep the code flowing ☕",
    },
    {
        icon: <FaMusic size={28} />,
        title: "Music-Driven Dev",
        description: "Coding hits different with music in the background 🎧",
    },
    {
        icon: <FaBug size={28} />,
        title: "Debugging Fan",
        description: "I enjoy the thrill of fixing bugs more than I should 🐛",
    },
    {
        icon: <FaGlobe size={28} />,
        title: "Explorer",
        description: "Always curious to learn new stacks and frameworks 🌍",
    },
    {
        icon: <FaLaptopCode size={28} />,
        title: "Builder",
        description: "I love building full-stack apps from idea to deployment 💻",
    },
    {
        icon: <FaLaptopCode size={28} />,
        title: "Weekend Hacker",
        description: "I love building random side projects during weekends 💡",
    }

];

const FunFacts = () => {
    return (
        <section
            id="fun-facts"
            className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-500"
        >
            <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                🎉 Fun Facts About Me
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
                {facts.map((fact, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-lg transition"
                    >
                        <div className="text-primary mb-3">{fact.icon}</div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                            {fact.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{fact.description}</p>
                    </div>
                ))}
            </div><br/><br/>
            {/* Signature at the bottom */}
            <motion.p
                className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 text-center"
                style={{ fontFamily: "'Dancing Script', cursive" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                — Bhuwan Thapa ❤️
            </motion.p>
        </section>
    );
};

export default FunFacts;
