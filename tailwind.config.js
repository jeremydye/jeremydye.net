module.exports = {
    content: [
        "./dist/**/*.{html,js}",
        "./dist/**/*",
    ],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')]
}