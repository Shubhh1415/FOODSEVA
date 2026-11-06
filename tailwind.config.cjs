// Tailwind configuration for FoodBridge
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "warm-ivory": "#F4EDE0",
        "forest-ink": "#263B30",
        "tomato-red": "#E45B39",
        "muted-olive": "#8A956B",
        "sand": "#D9CDBA",
        "body-text": "#4B554B",
        "muted-text": "#77796F"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["DM Sans", "sans-serif"]
      },
      fontSize: {
        // using clamp for responsive scaling – values are placeholders that will be refined in CSS tokens
        "hero": "clamp(48px, 8vw, 112px)",
        "section": "clamp(36px, 5vw, 64px)",
        "body": "clamp(15px, 1.2vw, 19px)"
      }
    }
  },
  plugins: []
};
