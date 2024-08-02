import { AiOutlineArrowRight } from "react-icons/ai";
import computer from "../../../assets/computer.png"
import pattern from "../../../assets/bg/pattern.png"
import about3 from "../../../assets/about3.png"
import about4 from "../../../assets/about4.png"
import about5 from "../../../assets/about5.png"
import about1 from "../../../assets/about1.png"
import about2 from "../../../assets/about2.png"
import { data } from "autoprefixer";
const About = () => {
    const datas = [
        {
            id:0,
            image:about3,
            title:"Trusted By Thousands",
            contenu:""
        },
        {
            id:1,
            image:about4,
            title:"Prime Location",
            contenu:""
        },
        {
            id:2,
            image:about5,
            title:"Lowest Commission",
            contenu:""
        },
    ]
    return ( 
        <div className="min-h-screen bg-white py-6 font-open" >
            <div className=" space-y-5">
                 <h3 className="text-accent font-source text-center uppercase">| <span className=" text-accent-orange">03 </span> Why Choose |</h3>
                 <h2 className=" text-2xl text-accent text-center font-bold max-w-[400px] mx-auto">Why Choose Our Properties
                 Of Real Estate Industries</h2>
            </div>
            <div className=" w-[80%] mx-auto py-11 space-y-3">
                <div className="w-full flex flex-wrap sm:justify-center md:justify-between lg:justify-between gap-4">
                    <div className="bg-[#EEC1AC] sm:w-[80%] md:w-[40%] lg:w-[40%] min-h-[300px] p-5 flex  flex-col space-y-4 justify-center" key={data.id}>
                                <img src={about1} alt="" className=" w-40 h-32" />
                                <h2 className=" text-accent text-xl font-bold">Budget Friendly</h2>
                                <p className="text-amber-700 ">Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </div>
                    <div className="bg-[#EEC1AC] sm:w-[80%] md:w-[40%] lg:w-[50%] min-h-[300px] p-5 flex gap-2 flex-wrap  justify-evenly items-center" key={data.id}>
                                <img src={about2} alt="" className=" w-40 h-32 " />
                            <div className=" max-w-[300px]">
                                <h2 className=" text-accent text-xl font-bold">Property Insurance</h2>
                                <p className="text-amber-700 ">Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                            </div>
                                
                    </div>
                   
                </div>
                <div className=" flex flex-wrap sm:justify-center md:justify-between lg:justify-between gap-2">
                    {
                      datas.map((data)=>(
                        <div className="bg-[#EEC1AC] sm:w-[80%] md:w-[40%] lg:w-[30%] h-[300px] p-5 flex flex-col  space-y-4 justify-center" key={data.id}>
                            <img src={data.image} alt="" className=" w-32 h-20 " />
                            <h2 className=" text-accent text-xl font-bold">{data.title}</h2>
                            <p className="text-amber-700 ">Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                      ))
                    }
                    
                  
                </div>

            </div>

            <div className=" min-h-[400px] bg-secondary relative flex overflow-hidden ">
              <img src={pattern} alt="" className=" absolute left-0 z-20" />
                <div className=" flex relative z-40 my-auto ">
                    <div className=" m-auto sm:w-full md:w-full lg:max-w-[500px] space-y-3 p-3  relative sm:left-0 md:left-3 lg:left-12">
                            <h3 className="text-accent font-source  uppercase">| <span className=" text-accent-orange">04 </span> About us |</h3>
                            <h2 className=" text-2xl font-bold text-accent">42+ years of helping you find the right Propertys</h2>
                            <p className=" text-amber-700">Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto</p>
                            <p className=" text-amber-700"> Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button className="bg-accent-orange hover:shadow-md rounded-md flex items-center p-3 gap-2"><span className=" text-sm text-accent">Explore Property</span> <span className=" text-white w-4 h-4 rounded-full bg-accent flex items-center justify-center"><AiOutlineArrowRight/></span></button>
                    </div>
                    <div className="sm:hidden md:hidden lg:block">
                        <img src={computer} alt="" className="" />
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default About;