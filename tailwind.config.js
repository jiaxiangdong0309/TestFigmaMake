/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d263a",
        secondary: "#777d89",
        accent: "#f8574c",
        "text-muted": "#a0a0b2",
        "text-secondary": "#a5a8b0",
      },
      fontFamily: {
        pingfang: [
          "PingFang_SC:Semibold",
          "PingFang_SC:Medium",
          "PingFang_SC:Regular",
          "sans-serif",
        ],
      },
      fontSize: {
        "2xl": "34px",
        xl: "30px",
        lg: "20px",
        base: "16px",
        sm: "15px",
        xs: "14px",
        "2xs": "12px",
        "3xs": "8.2px",
      },
      boxShadow: {
        button: "0px 10px 20px 0px rgba(0,0,0,0.04)",
        card: "0px 4px 56px 0px rgba(22,22,22,0.05)",
        banner: "0px 10px 30px 0px rgba(0,0,0,0.06)",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        100: "25rem",
        120: "30rem",
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
    },
  },
  plugins: [],
};
