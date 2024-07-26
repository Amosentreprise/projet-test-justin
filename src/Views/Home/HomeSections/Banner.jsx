import Nav from "../../../Components/Nav";
import home from "../../../assets/home.png"
import { IoIosHome } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
const Banner = () => {
    return ( 
        <div className="min-h-screen bg-gradient-to-r from-[#FFF6F2] to-[#EEC1AC] w-full p-4 font-kufam flex">
            <div className=" m-auto flex flex-col gap-8">
                <div>
                   <Nav/>
                </div>
                <div className="flex justify-between items-center gap-3 w-[80%] mx-auto relative">
                    <div className="w-[40%]">
                        <div className="space-y-4">
                                <span className="bg-gradient-to-r from-[#F3D1C1] to-[#FFB28D] p-[2px] text-amber-700 text-[16px] flex items-center  max-w-60 gap-3 uppercase tracking-wide"><span><IoIosHome/></span><span>Real Estate Agency</span></span>
                                    <h1 className=" text-4xl text-accent font-bold tracking-wider ">Find the perfect place to
                                    Live with your family</h1>
                                    <p className=" text-amber-700">Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate.</p>
                                <button className="bg-white rounded-md flex items-center p-3 gap-2"><span className=" text-sm text-accent">Explore Property</span> <span className=" text-white w-4 h-4 rounded-full bg-accent-orange flex items-center justify-center"><AiOutlineArrowRight/></span></button>
                        </div>
                    </div>
                    <div className="w-[45%] ">
                        <img src={home} alt=""  className=" "/>
                    </div>
                </div>
            </div>
                        
        </div>
     );
}
 
export default Banner;