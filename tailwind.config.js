/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
   theme: {
      container: {
         center: true,
         padding: "12px",
         screens: {
            sm: "850px",
            md: "1050px",
            lg: "1150px",
            xl: "1350px",
            "2xl": "1600px",
         },
      },
      extend: {
         colors: {
            orange: "#FD6D00",
         },
      },
   },
   plugins: [],
};
