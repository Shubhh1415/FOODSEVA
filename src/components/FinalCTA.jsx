import { motion } from "framer-motion";

export default function FinalCTA({ onDonate, onPartner }) {
  return (
    <section id="final" className="py-20" style={{backgroundColor: "var(--color-forest-ink)"}}>
      <div className="max-w-[1200px] mx-auto px-8 text-center text-white">
        <h2 className="text-[clamp(36px,8vw,64px)] font-display mb-6">
          A LITTLE EXTRA FOOD.
          <br />
          A LOT MORE HOPE.
        </h2>
        <p className="mb-8" style={{color: "var(--color-warm-ivory)"}}>
          "Every contribution can help create a better destination for surplus food."
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={onDonate}
            className="bg-tomato-red text-white px-6 py-3 rounded-md hover:bg-tomato-red/90 transition"
          >
            Donate Food
          </button>
          <button
            onClick={onPartner}
            className="bg-muted-olive text-white px-6 py-3 rounded-md hover:bg-muted-olive/90 transition"
          >
            Join as an NGO
          </button>
          <button
            className="bg-sand text-forest-ink px-6 py-3 rounded-md hover:bg-sand/90 transition"
          >
            Volunteer With Us
          </button>
        </div>
      </div>
    </section>
  );
}
