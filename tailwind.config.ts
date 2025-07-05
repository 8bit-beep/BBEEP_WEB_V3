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
                white: "#FFFFFF",
                background: "#F7F7F7",
                loginBackground: "#F6F7F9",
                placeholder: "rgba(0,0,0,0.5)",
            },
        },
    },
    plugins: [],
};
