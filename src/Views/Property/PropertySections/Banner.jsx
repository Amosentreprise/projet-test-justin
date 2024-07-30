import Nav from "../../../Components/Nav";
import property from "../../../assets/property.png"   
import icon1 from "../../../assets/bg/Icon1.png"
import icon2 from "../../../assets/bg/Icon2.png"
import { IoIosHome } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
const Banner = () => {
    return ( 
        <div className="min-h-[100vh - 8rem] bg-gradient-to-r from-[#FFF6F2] overflow-hidden to-[#EEC1AC] w-full pt-4 font-open relative ">
            <img src={icon1} alt="" className=" absolute z-30 w-[500px] h-[500px] -bottom-12 left-0" />
            <img src={icon2} alt="" className=" absolute z-30 top-2 right-0 w-[500px] h-[500px]" />
            
            <div className=" relative z-40">
                <Nav/>
            </div> 
            <div className=" m-auto flex flex-col gap-3 z-40">
                <div>
                   
                </div>
                <div className="flex justify-between items-center gap-3 w-[80%] mx-auto relative">
                    <div className="w-[45%]">
                        <div className="space-y-4">
                          <span className="bg-gradient-to-r from-[#F3D1C1] to-[#FFB28D] p-[2px] text-amber-700 text-[16px] flex items-center  max-w-60 gap-3 uppercase tracking-wide"><span><IoIosHome/></span><span>properties</span></span>
                

                           <h1 className=" text-4xl text-accent font-bold tracking-wider ">Browse 
                           properties</h1> 
                        </div>
                    </div>
                    <div className=" relative -right-40 z-40">
                        <img src={property} alt=""  className=" w-[600px]"/>
                    </div>
                </div>
            </div>
                        
        </div>
     );
}
 
export default Banner;