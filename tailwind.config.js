module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1536px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        primary_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
        primary_red: {
          light: "#FF0080",
          DEFAULT: "#C21E56"
        },
        primary_gray: {
          light: "#222222",
          DEFAULT: "#222222"
        }
      },
      outline: {
        black: '1px solid #d3d3d3',
      },
      backgroundImage: theme => ({
        // 'hero-pattern': "url('/img/mens-hero.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      })
    },
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp"), require('@tailwindcss/custom-forms')],
};