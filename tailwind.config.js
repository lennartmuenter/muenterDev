/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        "prime" : "rgba(157, 1, 45, 1)",
        "darkness" : "#0a0a0a",
        "lightness" : "#d4d4d4",
        "fullbright" : "#fff",
      }
    },
  },
  plugins: [],
}

