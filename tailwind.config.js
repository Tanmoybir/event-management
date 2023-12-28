/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        img1:"url('https://i.ibb.co/nQCdzzN/carnaval-background.jpg')",
        img2:"url('https://i.ibb.co/PQrFq76/view-of-carnival-lights.jpg')",
        img3:"url('https://i.ibb.co/M87nSTL/carnival-rides.jpg')",
        img4:"url('https://i.ibb.co/thSPBBx/celebrate-carnival-background.jpg')",
        img5:"url('https://i.ibb.co/JRkR9M8/Oz-Van-Rosen-Midnight-Blue-Glitch-Art-Framed.jpg')"
      },
      container:{
        center: true,
        padding:{
          default:'3rem',
          sm:'1rem'
        }
      }
    },
  },
  plugins: [require("daisyui")],
}

