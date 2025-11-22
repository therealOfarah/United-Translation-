export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#93c5fd",
          DEFAULT: "#1e40af",
          dark: "#1e3a8a",
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 4px 20px rgba(30, 64, 175, 0.25)',
      },
    },
  },
  plugins: [],
}
