"use client";

import { motion } from "framer-motion";
import { stack } from "@/data/stack";

export default function TechStack() {
  return (
    <section id="stack" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-bold mb-12"
        >
          <span className="text-violet font-mono">#</span> Stack
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {stack.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group flex flex-col items-center gap-2"
            >
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl bg-card border border-card-border group-hover:border-violet/30 transition-all duration-300"
                style={{
                  ["--glow-color" as string]: item.color,
                }}
              >
                <i
                  className={`${item.icon} text-2xl text-text/60 group-hover:drop-shadow-[0_0_8px_var(--glow-color)] transition-all duration-300`}
                  style={{
                    color: undefined,
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = item.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "";
                  }}
                />
              </div>
              <span className="text-text/40 text-xs text-center group-hover:text-text/70 transition-colors">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
