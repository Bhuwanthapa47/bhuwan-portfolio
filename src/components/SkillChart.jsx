import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SkillsChart = () => {
    const data = {
        labels: ["React", "Spring Boot", "Java", "MySQL", "Tailwind", "Thymeleaf"],
        datasets: [
            {
                label: "Tech Stack",
                data: [20, 20, 20, 15, 15, 10],
                backgroundColor: [
                    "#3b82f6",
                    "#22c55e",
                    "#f59e0b",
                    "#8b5cf6",
                    "#06b6d4",
                    "#f43f5e",
                ],
                borderWidth: 0, // removed white border
            },
        ],
    };

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
