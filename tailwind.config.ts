import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "coffee-white": "#fefdf5",
                "coffee-black": "#021928",
                "coffee-brown": "#b59c85",
                "coffee-alabaster": "#ece5d9",
                "coffee-icon": "#faf1e4",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                nunito: ["Nunito", "sans-serif"],
                kodchasan: ["Kodchasan", "sans-serif"],
                koho: ["KoHo", "sans-serif"],
                gluten: ["Gluten", "sans-serif"],
                "dancing-script": ["Dancing Script", "cursive"],
            },
            fontSize: {
                "2xs": ".65rem",
                "3xs": ".5rem",
            },
            borderWidth: {
                "3": "3px",
            },
        },
        fontFamily: {
            pacifico: ["var(--font-pacifico)"],
            kodchasan: ["var(--font-kodchasan)"],
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
