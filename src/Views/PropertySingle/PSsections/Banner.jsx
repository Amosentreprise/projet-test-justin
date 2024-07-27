import Nav from "../../../Components/Nav";
import ps from "../../../assets/propertySingle.png"

const Banner = () => {
    return ( 
        <div className="min-h-screen bg-gradient-to-r from-[#FFF6F2] overflow-hidden to-[#EEC1AC] w-full py-4 font-kufam flex relative " >
            <img src={ps} alt="" className=" absolute inset-0" />
           
          
                <div className=" absolute z-20 right-0 left-0">
                   <Nav/>
                </div>
              
            
                        
        </div>
     );
}
 
export default Banner;