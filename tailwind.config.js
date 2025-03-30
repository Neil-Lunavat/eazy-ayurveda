// tailwind.config.js
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ayurveda: {
                    cream: "#f5efdd", // Background color
                    sage: "#a2b56d", // Light olive/sage green for leaves
                    olive: "#4d5e25", // Darker olive green
                    yellow: "#e6ca37", // Yellow for flowers
                    mint: "#d6e0be", // Light mint green
                    text: "#8d9e49", // Medium olive for text
                },
            },
            backgroundImage: {
                "herb-pattern": "url('/herbs-pattern.svg')",
                "grain-texture": "url('/grain-texture.png')",
            },
            animation: {
                float: "float 3s ease-in-out infinite",
                "pulse-soft": "pulse-soft 3s infinite",
                shimmer: "shimmer 2s linear infinite",
                "spin-slow": "spin 8s linear infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                "pulse-soft": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.8 },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
            },
            boxShadow: {
                ayurveda: "0 4px 14px 0 rgba(77, 94, 37, 0.1)",
                "ayurveda-lg": "0 10px 25px -5px rgba(77, 94, 37, 0.15)",
            },
        },
    },
    plugins: [],
};
