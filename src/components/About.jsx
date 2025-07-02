import React from "react";

const skills = [
    "Java", "Spring Boot", "Hibernate", "MySQL",
    "React", "Tailwind CSS", "JavaScript",
    "REST APIs", "Thymeleaf", "Postman", "Git"
];

const About = () => {
    return (
        <section id="about" className="py-16 px-6 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    I'm <span className="font-semibold">Bhuwan Thapa</span>, a passionate full-stack developer who loves building clean and useful web apps.
                    I enjoy turning ideas into real-world applications — like this portfolio and my invoice system.
                    I believe in writing code that is not just functional, but also elegant and scalable.
                </p>

                <h3 className="text-xl font-semibold mb-4">My Skills</h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded dark:bg-blue-900 dark:text-blue-200"
                        >
              {skill}
            </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
