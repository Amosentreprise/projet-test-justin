/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
				primary:"#D9D9D9",
				secondary:"#F2F2F2",
				accent: {
				DEFAULT: '#3B3A5D', 
				orange: '#FFBB50', 
				
				},
      
      
			  },

			  fontFamily: {
				  kufam: ["Kufam", "sans-serif"],
				  source: ["Source Sans 3", "sans-serif"],
				  inter: ["Inter", "sans-serif"],
				  open: ["Open Sans", "sans-serif"],
			  },
			  screens: {
        
        sm:"200px",
				//320px
				md: "764px",
				// => @media (min-width: 768px) { ... }

				lg: "1024px",
		  
			   
				
			  },
    },
  },
  plugins: [],
}

