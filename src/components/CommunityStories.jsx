import { motion } from "framer-motion";

const stories = [
  {
    title: "Restaurant Owner",
    text: "We were surprised how easy it was to list surplus meals and see them go to a local shelter.",
    img: "/assets/story1.jpg",
  },
  {
    title: "Volunteer",
    text: "Picking up the food felt rewarding – we helped feed families in our neighborhood.",
    img: "/assets/story2.jpg",
  },
  {
    title: "Community Center",
    text: "FOODSEVA connected us with fresh produce we couldn’t otherwise afford.",
    img: "/assets/story3.jpg",
  },
];

export default function CommunityStories() {
  return (
    <section id="stories" className="py-20 bg-warm-ivory" style={{backgroundColor: "var(--color-warm-ivory)"}}>
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="text-[clamp(36px,8vw,64px)] font-display text-forest-ink text-center mb-12">
          COMMUNITY STORIES
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <img src={s.img} alt={s.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-display text-lg text-forest-ink mb-2">{s.title}</h3>
                <p className="text-sm" style={{color: "var(--color-body-text)"}}>{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
