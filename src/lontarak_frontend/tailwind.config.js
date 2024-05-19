/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        nico: "Nico-Moji, sans-serif",
        nova: "Nova-Square, sans-serif",
      },
      colors: {
        "putih-pucat": "rgba(255, 255, 255, 0.4)",
      },
    },
  },
  plugins: [],
};
