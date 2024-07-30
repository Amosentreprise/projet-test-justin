import { AiOutlineArrowRight } from "react-icons/ai";
import computer from "../../../assets/computer.png"
import pattern from "../../../assets/bg/pattern.png"
import image1 from "../../../assets/rewards.png"
import { data } from "autoprefixer";
const About = () => {
    const datas = [
        {
            id:0,
            image:image1,
            title:"Budjet Friendly",
            contenu:""
        },
        {
            id:1,
            image:image1,
            title:"Budjet",
            contenu:""
        },
        {
            id:2,
            image:image1,
            title:"Friendly",
            contenu:""
        },
    ]
    return ( 
        <div className="min-h-screen bg-white py-6 font-kufam" >
            <div className=" space-y-5">
                 <h3 className="text-accent font-source text-center uppercase">| <span className=" text-accent-orange">03 </span> Why Choose |</h3>
                 <h2 className=" text-2xl text-accent text-center font-bold max-w-[400px] mx-auto">Why Choose Our Properties
                 Of Real Estate Industries</h2>
            </div>
            <div className=" w-[80%] mx-auto py-11 space-y-3">
                <div className="flex justify-between gap-4">
                    <div className="bg-[#EEC1AC] w-[40%] h-[300px] p-5 flex flex-col space-y-4 justify-center" key={data.id}>
                                <img src={image1} alt="" className=" w-20 h-20 object-cover" />
                                <h2 className=" text-accent text-xl font-bold">Lorem, ipsum dolor sit amet consectetur adipi</h2>
                                <p className="text-amber-700 ">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nisi?</p>
                    </div>
                    <div className="bg-[#EEC1AC] w-[60%] h-[300px] p-5 flex justify-evenly items-center" key={data.id}>
                                <img src={image1} alt="" className=" w-32 h-32 object-cover" />
                            <div className=" max-w-[300px]">
                                <h2 className=" text-accent text-xl font-bold">Lorem, ipsum dolor sit amet consectetur adipi</h2>
                                <p className="text-amber-700 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nisi?</p>
                            </div>
                                
                    </div>
                   <div className="bg-[#EEC1AC] grid-cols-2"></div>
                </div>
                <div className=" flex  gap-6">
                    {
                      datas.map((data)=>(
                        <div className="bg-[#EEC1AC] w-[40%] h-[300px] p-5 flex flex-col  space-y-4 justify-center" key={data.id}>
                            <img src={data.image} alt="" className=" w-20 h-20 object-cover" />
                            <h2 className=" text-accent text-xl font-bold">{data.title}</h2>
                            <p className="text-amber-700 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nisi?</p>
                        </div>
                      ))
                    }
                    
                  
                </div>

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