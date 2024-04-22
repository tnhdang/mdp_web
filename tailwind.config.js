/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#D9E5E9",
        secondary1: "#4fb645",
        secondary2: "#9623F0",
        secondary3: "#00FFFF",
      },
      borderColor: {
        secondary1: "#4fb645",
      },
      textColor: {
        secondary1: "#4fb645",

        secondary2: "#9623F0",
      },

      backgroundImage: {
        // "pack-train": "url('./src/assets/mainpool.webp')",
        "cafeteria-card": "url('https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif')",
        // "seedoflife" : "url('./src/assets/seedoflife.png')",
      },
      screens: {
        pv: "280px",
        pvmax: "360px",
        ph: "480px",
        dv: "1440px",
        dh: "5000px",
      },
      boxShadow: {
        card: "1px 1px 1px 1px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
