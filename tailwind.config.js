/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: ["./src/**/*.{html,js}", "./*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    purple: "hsl(259, 100%, 65%)",
                    lightRed: "hsl(0, 100%, 67%)"
                },
                neutral: {
                    white: "hsl(0, 0%, 100%)",
                    offWhite: "hsl(0, 0%, 94%)",
                    lightGrey: "hsl(0, 0%, 86%)",
                    smokeyGrey: "hsl(0, 1%, 44%)",
                    offBlack: "hsl(0, 0%, 8%)",
                }
            },
            fontFamily: {
                'poppins': ['Poppins']
            }
        },
    },
    plugins: [],
}