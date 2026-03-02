"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "JIS College of Engineering",
    years: "2025 — 2029",
    description:
      "Pursuing a Bachelor's degree in Information Technology. Building real-world projects and contributing to open source alongside academics.",
  },
];

export default function Education() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-bold mb-12"
        >
          <span className="text-violet font-mono">#</span> Education
        </motion.h2>

        <div className="space-y-6">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="border-l-2 border-violet/50 pl-6 py-4 bg-card/50 rounded-r-lg border border-l-2 border-card-border hover:border-violet/30 transition-colors duration-300"
              style={{ borderLeftColor: "rgb(167 139 250 / 0.5)" }}
            >
              <h3 className="font-heading text-lg font-semibold text-text">
                {item.degree}
              </h3>
              <p className="text-violet/80 text-sm mt-1">{item.institution}</p>
              <p className="text-text/40 text-xs mt-1 font-mono">
                {item.years}
              </p>
              <p className="text-text/50 text-sm mt-3 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
