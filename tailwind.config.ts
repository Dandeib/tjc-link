import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "redstone": "url('https://cdn.discordapp.com/attachments/948184181597438035/1201951522183708752/minecraft-1618089_1920.jpg?ex=65cbaf96&is=65b93a96&hm=e90018921695270a4d27f425967cb4852ecefe00351bb8d1e672fde16ad22b4e&')",
      },
    },
    fontFamily: {
      'display': ['Oswald']
    }
  },
  plugins: [],
};
export default config;
