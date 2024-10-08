/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
				primary:"#f1f5f9",
				secondary:"#F2F2F2",
				accent: {
				DEFAULT: '#28282a', 
				orange: '#f4952c', 
				neutral:"#575756"
				
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
				md: "646px",
				// => @media (min-width: 768px) { ... }

				lg: "1024px",
		  
			   
				
			  },
    },
  },
  plugins: [],
}

