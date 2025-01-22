import { Work_Sans } from "next/font/google";

// Configure the Work Sans font
const workSans = Work_Sans({
  weight: ["400", "500", "700"], // Specify font weights
  subsets: ["latin"],           // Specify subsets
  variable: "--font-work-sans", // Define a CSS variable
});

// Export the font configuration
export default workSans;
