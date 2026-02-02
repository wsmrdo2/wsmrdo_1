/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1A1A1A', // Deep Charcoal
        primary: '#007AFF', // Electric Blue
        text: '#F5F5F5', // Off-white
        muted: '#A0A0A0',
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
