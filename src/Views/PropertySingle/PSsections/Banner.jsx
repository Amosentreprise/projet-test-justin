import Nav from "../../../Components/Nav";
import ps from "../../../assets/propertySingle.png"

const Banner = () => {
    return ( 
        <div className="min-h-[calc(100vh-6rem)] overflow-hidden w-full py-4 font-open flex relative " >
            <div className=" absolute inset-0">
             <img src={ps} alt="" className=" w-full h-full" />
            </div>
            
           
          
                <div className=" absolute z-50 right-0 left-0">
                   <Nav/>
                </div>
              
            
                        
        </div>
     );
}
 
export default Banner;