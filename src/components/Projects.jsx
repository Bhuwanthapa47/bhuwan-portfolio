import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Invoice System",
        description:
            "A full-stack Spring Boot invoice management system with PDF export, email, and user roles.",
        tech: ["Spring Boot", "Thymeleaf", "MySQL", "Tailwind"],
        github: "https://github.com/Bhuwanthapa47/invoice-system",
        demo: "#",
    },
    {
        title: "Quote Reels IG Page",
        description:
            "An Instagram content project where I post reels with quotes and aesthetics.",
        tech: ["Instagram", "Reels", "Quotes", "Content"],
        github: "https://instagram.com/instareelmode",
        demo: "https://instagram.com/instareelmode",
    },
    {
        title: "Portfolio Site",
        description:
            "The site you're looking at — built with React and Tailwind, featuring dark mode and animations.",
        tech: ["React", "Tailwind", "Dark Mode"],
        github: "https://github.com/Bhuwanthapa47/portfolio",
        demo: "#",
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-16 px-6 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 scroll-mt-20"
        >
            <motion.h2
                className="text-3xl font-bold text-center mb-10"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                My Projects
            </motion.h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((proj, index) => (
                    <motion.div
                        key={index}
                        className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:shadow-blue-500/30 hover:shadow-xl transition-transform duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                            delay: index * 0.2,
                        }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {proj.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded dark:bg-blue-900 dark:text-blue-200"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            {proj.github && (
                                <a
                                    href={proj.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-500 hover:underline"
                                >
                                    GitHub
                                </a>
                            )}
                            {proj.demo !== "#" && (
                                <a
                                    href={proj.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-green-500 hover:underline"
                                >
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
