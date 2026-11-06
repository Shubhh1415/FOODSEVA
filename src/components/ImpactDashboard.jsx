import { motion } from "framer-motion";

const metrics = [
  { label: "Meals Rescued", value: 1243 },
  { label: "Food Donors", value: 87 },
  { label: "NGO Partners", value: 23 },
  { label: "Communities Supported", value: 12 },
];

export default function ImpactDashboard() {
  return (
    <section id="impact" className="py-20 bg-tomato-red text-white" style={{backgroundColor: "var(--color-tomato-red)"}}>
      <div className="max-w-[1200px] mx-auto px-8 text-center">
        <h2 className="text-[clamp(36px,8vw,64px)] font-display mb-12">
          IMPACT
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="text-5xl font-display mb-2">{m.value.toLocaleString()}</div>
              <div className="text-lg">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
