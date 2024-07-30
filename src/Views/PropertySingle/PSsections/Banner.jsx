import Nav from "../../../Components/Nav";
import ps from "../../../assets/propertySingle.png"

const Banner = () => {
    return ( 
        <div className="min-h-[calc(100vh-6rem)] overflow-hidden w-full py-4 font-open flex relative " >
            <img src={ps} alt="" className=" absolute inset-0" />
           
          
                <div className=" absolute z-20 right-0 left-0">
                   <Nav/>
                </div>
              
            
                        
        </div>
     );
}
 
export default Banner;