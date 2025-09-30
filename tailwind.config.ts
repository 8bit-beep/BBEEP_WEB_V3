/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                main: "#346287",
                serve: "#32A89C",
                red: "#EF5A5A",
                dark: "#323A45",
                gray: "#B7B7B7",
                lightGray: "#F4F4F4",
                green: "#30FF30",
                black: "#303030",
                white: "#FCFCFC",
                background: "#F7F7F7",
                loginBackground: "#F6F7F9",
                placeholder: "rgba(0,0,0,0.5)",
            },
            fontFamily: {
                sans: ["Pretendard", "ui-sans-serif", "system-ui"],
            },
            fontSize: {
                title1: ["28px", { lineHeight: "auto" }],
                title2: ["24px", { lineHeight: "auto" }],
                title3: ["24px", { lineHeight: "auto" }],
                heading: ["20px", { lineHeight: "auto" }],
                body: ["16px", { lineHeight: "auto" }],
                caption1: ["12px", { lineHeight: "auto" }],
                caption2: ["12px", { lineHeight: "auto" }],
            },
            fontWeight: {
                semibold: 600,
                medium: 500,
                regular: 400,
            },
            letterSpacing: {
                tight05: "-0.5px",
            },
        },
    },
    plugins: [],
};
