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
                    I'm <span className="font-semibold">Bhuwan Thapa</span>, I am a passionate Full Stack Java Developer with a growing interest in Artificial Intelligence and Machine Learning, focused on building practical, real-world applications. My development journey started with strong backend foundations using Java, Spring Boot, Hibernate, JPA, and MySQL, where I worked on projects involving REST APIs, authentication, role-based access, PDF generation, and database-driven systems.
                    I have built and deployed multiple projects such as Book Management Systems, Invoice Processing Systems with PDF support, Workout Tracking Dashboards, and scalable web applications using Spring Boot and Thymeleaf. These projects helped me understand clean architecture, backend security, and end-to-end application development.
                    Alongside backend development, I am actively exploring AI/ML and Data Science, working on projects like Movie Recommendation Systems, Hate Speech Detection, and Student Performance Prediction using Python, Pandas, scikit-learn, and machine learning techniques. This journey has strengthened my analytical thinking and problem-solving approach.
                    Currently, I am continuously improving my full stack skills while deepening my understanding of AI-driven solutions, with the goal of building intelligent, impactful software products.</p>

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
