import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <>
    <Navbar/>
    <section id="about" className="p-12 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-blue-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Our CBC System
        </motion.h2>
        <p className="text-gray-700  text-lg max-w-3xl mx-auto">
          Empowering schools, teachers, and learners across Kenya to embrace
          the Competency-Based Curriculum (CBC) through technology-driven
          education.
        </p>
      </div>

      {/* Mission */}
      <motion.div
        className="max-w-6xl mx-auto mb-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-4xl font-bold text-blue-600 mb-3">
           Mission
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Our mission is to empower educators and learners by providing
          digital tools that make CBC implementation simple, interactive, and
          impactful. We believe in a future where every learner gains
          practical skills, creativity, and confidence through
          competency-based education.
        </p>
      </motion.div>

      {/* Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
        {[
          {
            title: "Teacher Portal",
            desc: "Easily manage lessons, upload resources, and assess learners.",
          },
          {
            title: "Learner Dashboard",
            desc: "Track individual progress and explore personalized learning paths.",
          },
          {
            title: "Parent Access",
            desc: "Stay informed on learner growth, achievements, and reports.",
          },
          {
            title: "School Administration",
            desc: "Simplify timetables, performance tracking, and reports.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-blue-600 mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Core Values */}
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-4xl font-bold text-blue-600 mb-6">
           Core Values
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Collaboration",
            "Innovation",
            "Inclusivity",
            "Excellence",
            "Transparency",
          ].map((value, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 text-gray-700 font-medium hover:bg-blue-50 transition"
            >
              {value}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
    <Footer/>
    </>
  );
};

export default About;
