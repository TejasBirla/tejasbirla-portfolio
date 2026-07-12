const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./data/**/*.{js,ts}"],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: { transform: "translate(calc(-50% - 0.5rem))" },
        },
      },
      colors: {
        spotify: {
          green: "#1DB954",
          black: "#191414",
          white: "#FFFFFF",
          grey: "#B3B3B3",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({ ":root": newVars });
}
