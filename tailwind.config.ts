import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        boysColor: "#bae6fd",
        girlsColor: "#ddd6fe",
        primaryTextColor: "#475569",
        primaryBgColor: "#64748b",
        amberColor300: "#fcd34d",
        mainBgColor: "#0891b2",
        mainTextColor: "#06b6d4",
      },
    },
  },
  plugins: [],
} satisfies Config;

// Layouts --- Cyan    (600-500)
// card title ---- slate   (600-500)
// Sky - Purple
