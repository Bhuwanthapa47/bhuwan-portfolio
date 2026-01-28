import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SkillsChart = () => {
    // ----- DATA -----
    const data = {
        labels: [
            "Java","Spring Boot","Hibernate","JPA","MySQL","MongoDB","REST API",
            "Spring Security","Thymeleaf","React","Tailwind CSS","HTML5","CSS3",
            "JavaScript","Python","Machine Learning","Data Science","Pandas",
            "NumPy","scikit-learn","iText (PDF Generation)","Git","Postman","Maven"
        ],
        datasets: [
            {
                label: "Tech Stack",
                data: [
                    20,20,18,18,17,15,19,17,16,18,16,19,18,18,15,14,14,15,15,14,16,19,17,16
                ],
                backgroundColor: [
                    "#3b82f6","#22c55e","#f59e0b","#8b5cf6","#06b6d4","#f43f5e","#ec4899","#f97316",
                    "#14b8a6","#6366f1","#10b981","#facc15","#db2777","#60a5fa","#a78bfa","#f87171",
                    "#34d399","#fbbf24","#6366f1","#f472b6","#22d3ee","#f59e0b","#3b82f6","#f43f5e"
                ],
                borderWidth: 0,
            },
        ],
    };

    // ----- OPTIONS -----
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    color: "#6b7280",
                    font: {
                        size: 13,
                    },
                },
            },
        },
    };

    // ----- JSX RETURN -----
    return (
        <section
            id="skills"
            className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
        >
            <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                🧠 My Tech Stack
            </h2>

            <div className="max-w-xs mx-auto" style={{ height: "240px" }}>
                <Pie data={data} options={options} />
            </div>
        </section>
    );
};

export default SkillsChart;
