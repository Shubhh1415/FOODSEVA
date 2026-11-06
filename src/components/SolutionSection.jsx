import { motion } from "framer-motion";

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20" style={{backgroundColor: "var(--color-warm-ivory)"}}>
      <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[clamp(36px,8vw,64px)] font-display text-forest-ink mb-6">
            OUR SOLUTION
          </h2>
          <p className="text-lg md:text-xl mb-4" style={{color: "var(--color-body-text)"}}>
            FOODSEVA is the connective platform that links food donors, NGOs, volunteers, and communities.
          </p>
          <p className="text-lg md:text-xl" style={{color: "var(--color-body-text)"}}>
            A visual bridge graphic illustrates the flow of surplus food to those in need.
          </p>
        </motion.div>
        {/* Bridge graphic placeholder */}
        <motion.img
          src="/assets/bridge-graphic.png"
          alt="Bridge graphic showing connection"
          className="w-full rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
    </section>
  );
}
