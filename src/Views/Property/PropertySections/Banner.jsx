import Nav from "../../../Components/Nav";
import property from "../../../assets/property.png"   
import icon1 from "../../../assets/bg/Icon1.png"
import icon2 from "../../../assets/bg/Icon2.png"
import { IoIosHome } from "react-icons/io";

const Banner = () => {
    return ( 
        <div className="min-h-[calc(100vh-9rem)] bg-white overflow-hidden  w-full pt-4 font-open relative flex flex-col ">
                     <img src={icon1} alt="" className=" absolute z-30 sm:w-[200px] md:w-[400px] lg:w-[500px] sm:h-[300px] md:h-[400px] lg:h-[500px] -bottom-10 left-0" />
                     <img src={icon2} alt="" className=" absolute z-30 -top-10 -right-40 sm:w-[300px] md:w-[400px] lg:w-[400px] sm:h-[300px] md:h-[400px] lg:h-[500px]" />
            
            <div className="relative z-50">
                <Nav/>
            </div> 
            <div className=" my-auto flex flex-col gap-3 z-40">
                <div>
                   
                </div>
                <div className="flex justify-between items-center gap-3 w-[80%] mx-auto relative">
                    <div className="lg:w-[45%] md:w-[80%] sm:w-[80%]">
                        <div className="space-y-4">
                          <span className=" p-[2px] text-amber-700 text-[16px] flex items-center gap-3 uppercase tracking-wide"><span><IoIosHome/></span><span>properties</span></span>
                

                           <h1 className=" text-4xl text-accent font-bold tracking-wider ">Browse 
                           properties</h1> 
                        </div>
                    </div>
                    <div className="sm:hidden md:hidden xl:block relative -right-40 z-40">
                        <img src={property} alt=""  className=" w-[600px]"/>
                    </div>
                </div>
            </div>
                        
        </div>
     );
}
 
export default Banner;