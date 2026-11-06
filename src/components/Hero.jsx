import { motion } from "framer-motion";

export default function Hero({ onDonate }) {
  return (
    <section id="hero" className="min-h-screen flex items-center" style={{backgroundColor: "var(--color-warm-ivory)"}}>
      <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-[clamp(48px,10vw,112px)] font-display leading-none" style={{color: "var(--color-forest-ink)"}}>
            GOOD FOOD.<br/>SECOND CHANCES.
          </h1>
          <p className="text-lg md:text-xl" style={{color: "var(--color-body-text)"}}>
            "Every day, perfectly good food goes to waste while communities go hungry. FOODSEVA connects surplus with those who need it."
          </p>
          <div className="flex space-x-4">
            <button
              onClick={onDonate}
              className="bg-tomato-red text-white px-6 py-3 rounded-md hover:bg-tomato-red/90 transition"
            >
              BECOME A FOOD DONOR
            </button>
            <button className="bg-forest-ink text-white px-6 py-3 rounded-md hover:bg-forest-ink/90 transition">
              DISCOVER OUR MISSION
            </button>
          </div>
        </motion.div>
        {/* Placeholder for editorial image */}
        <motion.img
          src="/assets/hero.jpg"
          alt="Surplus food ready for donation"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </section>
  );
}
