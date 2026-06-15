/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        primary: "#ffffff",
        secondary: "#aaaaaa",
        muted: "#666666",
        accent: "#111111",
        border: "#222222",
        card: "#0f0f0f",
        "card-hover": "#161616",
        "border-muted": "#1e1e1e",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
        huge: '.5em',
        nav: '.15em',
        label: '.25em',
      },
      padding: {
        'section': '120px',
      },
      maxWidth: {
        'portfolio': '1400px',
      }
    },
  },
  plugins: [],
}
