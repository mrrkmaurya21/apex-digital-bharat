import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Apex Digital Bharat palette — cosmic latte + warm orange
        bg: "#FFFEF9",         // off-white cream
        surface: "#FAF6EC",    // muted surface
        ink: "#1A1A1A",        // primary text
        muted: "#4A4A4A",      // secondary text
        subtle: "#6B7280",     // tertiary text
        accent: "#C2410C",     // warm orange CTA
        "accent-soft": "#FFF7ED",
        "accent-border": "#FED9B5",
        "accent-deep": "#5F2A0B",
        border: "#F0E9DC",     // warm-tinted border
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.02em",
        tighter: "-0.01em",
      },
    },
  },
  plugins: [],
};

export default config;
