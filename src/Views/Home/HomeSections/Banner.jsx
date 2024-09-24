import Nav from "../../../Components/Nav";
import home from "../../../assets/home.png"
import icon1 from "../../../assets/bg/Icon1.png"
import icon2 from "../../../assets/bg/Icon2.png"
import { IoIosHome } from "react-icons/io";
import { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return ( 
        <div  className="min-h-screen bg-white overflow-hidden w-full pt-4  font-open flex flex-col relative ">
            <img src={icon1} alt="" className=" absolute z-30 sm:w-[200px] md:w-[400px] lg:w-[500px] sm:h-[300px] md:h-[400px] lg:h-[500px] -bottom-10 left-0" />
            <img src={icon2} alt="" className=" absolute z-30 -top-10 -right-40 sm:w-[300px] md:w-[400px] lg:w-[400px] sm:h-[300px] md:h-[400px] lg:h-[500px]" />
                <div className="relative z-50">
                   <Nav/>
                </div>
                <div className="my-auto z-40">
                    
                    <div className="flex justify-between items-center gap-3 md:w-[80%] sm:w-[80%] lg:w-[80%] mx-auto relative">
                        <div className="lg:w-[45%] md:w-full sm:w-full" data-aos="fade-right" data-aos-duration="2000">
                            <div className="sm:space-y-2 md:space-y-3 lg:space-y-4">
                                    <span className=" p-[2px] text-amber-700 text-[16px] flex items-center   gap-3 uppercase tracking-wide"><span><IoIosHome/></span><span>Real Estate Agency</span></span>
                                        <h1 className=" text-4xl text-accent font-bold ">Find the perfect place to
                                        Live with your family</h1>
                                        <p className=" text-amber-700">Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate.</p>
                                      
                                      <a href="/alouer" onClick={()=> localStorage.setItem('selectedOption', 2)} className="inline-block mt-4"><button className="bg-accent-orange hover:shadow-md text-white transition-all rounded-md flex items-center p-3 gap-2"><span className=" text-sm ">Explore Property</span> <span className=" text-white w-4 h-4 rounded-full bg-accent flex items-center justify-center"><AiOutlineArrowRight/></span></button></a>
                            </div>
                        </div>
                        <div className="sm:hidden md:hidden lg:block relative -right-40" >
                            <img src={home} alt=""  className=" w-[600px]"/>
                        </div>
                    </div>
                </div>
                        
        </div>
     );
}
 
export default Banner;