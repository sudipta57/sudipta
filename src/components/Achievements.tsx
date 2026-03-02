"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-bold mb-12"
        >
          <span className="text-violet font-mono">#</span> Achievements
        </motion.h2>

        <div className="space-y-4">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-card-border hover:border-violet/20 hover:bg-card transition-all duration-300 group"
            >
              <span className="text-xl mt-0.5 group-hover:scale-110 transition-transform duration-200">
                🏆
              </span>
              <div>
                <h3 className="font-heading text-sm font-semibold text-text group-hover:text-violet transition-colors">
                  {item.title}
                </h3>
                <p className="text-text/40 text-xs mt-1">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
