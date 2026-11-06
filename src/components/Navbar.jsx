import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { id: "mission", label: "Our Mission" },
  { id: "how-it-works", label: "How It Works" },
  { id: "impact", label: "Impact" },
  { id: "stories", label: "Stories" },
];

export default function Navbar({ onDonate }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const navLink = (item) => (
    <Link
      activeClass="text-tomato-red"
      to={item.id}
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      className="cursor-pointer hover:text-tomato-red transition-colors"
      onClick={() => setOpen(false)}
    >
      {item.label}
    </Link>
  );

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-warm-ivory bg-opacity-80 backdrop-blur-sm z-50 border-b border-sand"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-display text-forest-ink font-bold">
          FOODSEVA
        </div>
        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <div key={item.id}>{navLink(item)}</div>
          ))}
        </div>
        {/* CTA */}
        <button
          onClick={onDonate}
          className="hidden md:inline-block bg-tomato-red text-white px-5 py-2 rounded-md hover:bg-tomato-red/90 transition"
        >
          Donate Food
        </button>
        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={toggle} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile panel */}
      {open && (
        <motion.div
          className="md:hidden bg-warm-ivory border-t border-sand"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col space-y-4 px-8 py-4">
            {navItems.map((item) => (
              <div key={item.id}>{navLink(item)}</div>
            ))}
            <button
              onClick={() => { onDonate(); setOpen(false); }}
              className="bg-tomato-red text-white px-5 py-2 rounded-md"
            >
              Donate Food
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
