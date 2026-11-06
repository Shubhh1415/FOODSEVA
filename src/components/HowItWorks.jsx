import { motion } from "framer-motion";

export default function HowItWorks() {
  const stages = [
    {
      number: "01",
      title: "SHARE",
      description: "Donors list their available surplus food.",
    },
    {
      number: "02",
      title: "CONNECT",
      description: "Suitable NGO partners are identified.",
    },
    {
      number: "03",
      title: "RESCUE",
      description: "Pickup and distribution are coordinated.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20" style={{backgroundColor: "var(--color-forest-ink)"}}>
      <div className="max-w-[1200px] mx-auto px-8 text-center text-white">
        <h2 className="text-[clamp(36px,8vw,64px)] font-display mb-12">
          A BETTER ROUTE FOR EVERY MEAL
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage, idx) => (
            <motion.div
              key={stage.number}
              className="bg-sand bg-opacity-10 p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="text-4xl font-display mb-4 text-tomato-red">{stage.number}</div>
              <h3 className="text-2xl font-display mb-2">{stage.title}</h3>
              <p>{stage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
