module.exports = {
  content: ["./src/**/*.{html,js,cjs,mjs,ts,css}"],
  theme: {
      fontFamily: {
          primary: 'Poppins'
      },
      container: {
          padding: {
              DEFAULT: '30px',
              lg: '0',
          },
      },
      screens: {
          xs: '480px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1440px',
      },
      extend: {
          colors: {
              primary: '#222222',
              secondary: '#F5E6E0',
          },
          backgroundImage: {

          },
      },
  },
  plugins: [],
};