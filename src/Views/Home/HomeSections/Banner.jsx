import Nav from "../../../Components/Nav";
import home from "../../../assets/home.png"
import icon1 from "../../../assets/bg/Icon1.png"
import icon2 from "../../../assets/bg/Icon2.png"
import { IoIosHome } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
const Banner = () => {
    return ( 
        <div className="min-h-screen bg-gradient-to-r from-[#FFF6F2] overflow-hidden to-[#EEC1AC] w-full py-4  font-open flex relative ">
            <img src={icon1} alt="" className=" absolute z-30 w-[500px] h-[500px] bottom-0 left-0" />
            <img src={icon2} alt="" className=" absolute z-30 top-2 right-0 w-[500px] h-[500px]" />
            <div className=" m-auto flex flex-col gap-3 z-40">
                <div>
                   <Nav/>
                </div>
                <div className="flex justify-between items-center gap-3 w-[80%] mx-auto relative">
                    <div className="w-[45%]">
                        <div className="space-y-4">
                                <span className="bg-gradient-to-r from-[#F3D1C1] to-[#FFB28D] p-[2px] text-amber-700 text-[16px] flex items-center  max-w-60 gap-3 uppercase tracking-wide"><span><IoIosHome/></span><span>Real Estate Agency</span></span>
                                    <h1 className=" text-4xl text-accent font-bold ">Find the perfect place to
                                    Live with your family</h1>
                                    <p className=" text-amber-700">Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate.</p>
                                <button className="bg-white rounded-md flex items-center p-3 gap-2"><span className=" text-sm text-accent">Explore Property</span> <span className=" text-white w-4 h-4 rounded-full bg-accent-orange flex items-center justify-center"><AiOutlineArrowRight/></span></button>
                        </div>
                    </div>
                    <div className=" relative -right-40">
                        <img src={home} alt=""  className=" w-[600px]"/>
                    </div>
                </div>
            </div>
                        
        </div>
     );
}
 
export default Banner;