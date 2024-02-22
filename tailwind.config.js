/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        borderWidth: {
            DEFAULT: '1px',
            '0': '0',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '6': '6px',
            '8': '8px',
        },
        screens: {
            'sm': {'max': '640px'},
            // => @media (min-width: 640px and max-width: 767px) { ... }

            'md': {'min': '768px', 'max': '1023px'},
            // => @media (min-width: 768px and max-width: 1023px) { ... }

            'lg': {'min': '1024px', 'max': '1279px'},
            // => @media (min-width: 1024px and max-width: 1279px) { ... }

            'xl': {'min': '1280px', 'max': '1535px'},
            // => @media (min-width: 1280px and max-width: 1535px) { ... }

            '2xl': {'min': '1536px'},
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            fontFamily: {
                custom: ['Montserrat', 'sans'], // Здесь Montserrat будет шрифтом по умолчанию для текста без засечек (sans-serif)
            },
            colors: {
                customColor: '#37373F',
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            maxWidth: {
                '605px': '605px',
            },
        },
    },
    plugins: [],
}
