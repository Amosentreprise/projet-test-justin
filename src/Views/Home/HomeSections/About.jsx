import { AiOutlineArrowRight } from "react-icons/ai";
import computer from "../../../assets/computer.png"
import pattern from "../../../assets/bg/pattern.png"
const About = () => {
    return ( 
        <div className="min-h-screen bg-white py-6 font-kufam" >
            <div className=" space-y-5">
                 <h3 className="text-accent font-source text-center uppercase">| <span className=" text-accent-orange">03 </span> Why Choose |</h3>
                 <h2 className=" text-2xl text-accent text-center font-bold max-w-[400px] mx-auto">Why Choose Our Properties
                 Of Real Estate Industries</h2>
            </div>
            <div>

            </div>

            <div className=" min-h-[400px] bg-secondary relative overflow-hidden ">
              <img src={pattern} alt="" className=" absolute left-0 z-20" />
                <div className=" flex relative z-40 ">
                    <div className=" m-auto max-w-[500px] space-y-3 p-3  relative left-12">
                            <h3 className="text-accent font-source  uppercase">| <span className=" text-accent-orange">04 </span> About us |</h3>
                            <h2 className=" text-2xl font-bold text-accent">42+ years of helping you find the right Propertys</h2>
                            <p className=" text-amber-700">Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto</p>
                            <p className=" text-amber-700"> Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button className="bg-accent-orange rounded-md flex items-center p-3 gap-2"><span className=" text-sm text-accent">Explore Property</span> <span className=" text-white w-4 h-4 rounded-full bg-accent flex items-center justify-center"><AiOutlineArrowRight/></span></button>
                    </div>
                    <div>
                        <img src={computer} alt="" className="" />
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default About;