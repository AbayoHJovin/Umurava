import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
     screens: {
      sssm: "320px",
      xsm: "386px",
      smm: "400px",
      ssm: "550px",
      sm: "640px",
      md: "768px",
      xmd: "960px",
      lg: "1024px",
      xlg: "1160px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      
    },
  },
  plugins: [],
} satisfies Config;
