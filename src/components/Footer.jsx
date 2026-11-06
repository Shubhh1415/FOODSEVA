import { Link } from "react-scroll";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { id: "mission", label: "Our Mission" },
  { id: "how-it-works", label: "How It Works" },
  { id: "impact", label: "Impact" },
  { id: "stories", label: "Stories" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-ink text-white py-10" style={{backgroundColor: "var(--color-forest-ink)"}}>
      <div className="max-w-[1440px] mx-auto px-8 grid md:grid-cols-4 gap-8">
        {/* Logo & mission */}
        <div>
          <div className="text-2xl font-display mb-2">FOODSEVA</div>
          <p className="text-sm" style={{color: "var(--color-warm-ivory)"}}>
            Connecting surplus food with communities in need.
          </p>
        </div>
        {/* Navigation */}
        <div>
          <h3 className="font-display mb-2">Navigation</h3>
          <ul>
            {navItems.map(item => (
              <li key={item.id} className="mb-1">
                <Link
                  to={item.id}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="cursor-pointer hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact placeholder */}
        <div>
          <h3 className="font-display mb-2">Contact</h3>
          <p className="text-sm" style={{color: "var(--color-warm-ivory)"}}>
            Email: demo@foodbridge.org<br />
            Phone: +1 (555) 123‑4567
          </p>
        </div>
        {/* Social media placeholders */}
        <div>
          <h3 className="font-display mb-2">Follow Us</h3>
          <ul>
            <li className="mb-1"><a href="#" className="hover:underline" style={{color: "var(--color-warm-ivory)"}}>Twitter</a></li>
            <li className="mb-1"><a href="#" className="hover:underline" style={{color: "var(--color-warm-ivory)"}}>LinkedIn</a></li>
            <li className="mb-1"><a href="#" className="hover:underline" style={{color: "var(--color-warm-ivory)"}}>Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 text-sm" style={{color: "var(--color-warm-ivory)"}}>
        © 2026 FOODSEVA. All rights reserved.
      </div>
    </footer>
  );
}
