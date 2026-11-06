import { motion } from "framer-motion";

// Simple placeholder data for the four features
const features = [
  {
    title: "Food Donation Listings",
    description: "Donors can list surplus food with details, photos, and pickup windows.",
    // Using a generic icon name; replace with appropriate Lucide icon if desired
    icon: "Box",
  },
  {
    title: "NGO Partnerships",
    description: "NGOs discover matches, manage intake, and coordinate volunteers.",
    icon: "Handshake",
  },
  {
    title: "Pickup Coordination",
    description: "Real‑time scheduling, route planning and volunteer logistics.",
    icon: "Truck",
  },
  {
    title: "Community Participation",
    description: "Volunteers, beneficiaries and local groups stay informed and involved.",
    icon: "Users",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-warm-ivory" style={{backgroundColor: "var(--color-warm-ivory)"}}>
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="text-[clamp(36px,8vw,64px)] font-display text-forest-ink text-center mb-12">
          KEY FEATURES
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col md:flex-row items-start bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              {/* Icon placeholder */}
              <div className="w-12 h-12 bg-tomato-red rounded-full flex items-center justify-center text-white mb-4 md:mb-0 md:mr-4">
                {feat.icon[0]}
              </div>
              <div>
                <h3 className="font-display text-lg text-forest-ink mb-2">{feat.title}</h3>
                <p className="text-sm" style={{color: "var(--color-body-text)"}}>{feat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
