import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section id="mission" className="py-20 bg-warm-ivory" style={{backgroundColor: "var(--color-warm-ivory)"}}>
      <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.img
          src="/assets/problem-left.jpg"
          alt="Surplus food in a restaurant kitchen"
          className="rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[clamp(36px,8vw,64px)] font-display text-forest-ink mb-6">
            THE PROBLEM
          </h2>
          <p className="text-lg md:text-xl mb-4" style={{color: "var(--color-body-text)"}}>
            Every day, perfectly good food ends up as waste in restaurants, hotels, and households. At the same time, millions of people face food insecurity.
          </p>
          <p className="text-lg md:text-xl" style={{color: "var(--color-body-text)"}}>
            Reducing waste while feeding communities is a clear, urgent need. FOODSEVA bridges that gap.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
