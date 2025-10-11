import React from "react";
import { useNavigate } from "react-router-dom";

const Hero2 = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="p-12 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          About CBC
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Competency-Based Curriculum (CBC) is designed to equip learners
          with practical skills, knowledge, and values for the modern world.
          Our CBC School System helps schools implement this curriculum with
          tools for assessments, student progress tracking, parent engagement,
          and reporting.
        </p>

        <button
          onClick={() => navigate("/about")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero2;
