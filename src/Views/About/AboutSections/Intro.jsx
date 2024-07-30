
import intro from "../../../assets/about/introAbout.png"
import { VscServerEnvironment } from "react-icons/vsc";
import { IoHome } from "react-icons/io5";
const Intro = () => {
    const process = [
        {
            id:0,
            processNum:"01",
            processTitle:"Planning stage",
            processBody:"High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive"
        },
        {
            id:1,
            processNum:"02",
            processTitle:"Development",
            processBody:"High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive"
        },
        {
            id:2,
            processNum:"03",
            processTitle:"New way of living",
            processBody:"High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive"
        },
    ]
    return ( 
        <section className="  p-10 bg-stone-100 space-y-5">
        <div className=" w-[80%] mx-auto flex flex-wrap justify-between">
            <div>
               <img src={intro} alt="" className=" h-[500px] w-full object-cover" />
            </div>
            <div className=" space-y-3">
                <div className=" max-w-[500px] space-y-3">
                        <h3 className="text-accent text-2xl font-source uppercase">| <span className=" text-accent-orange">01 </span>VIntro Video |</h3>
                        <h2 className=" text-3xl text-accent font-bold font-open">Buying & Selling Property In An Easy Way</h2>
                        <p className=" text-amber-700">Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
                        </p>
                </div>
                <div className=" max-w-[500px] h-auto bg-white space-y-4">
                    <div className=" flex items-center p-3 justify-between">
                         <div>
                            <IoHome className=" text-5xl text-accent-orange"/>
                         </div>
                         <div>
                            <h2 className=" text-2xl font-bold text-accent font-open">Our Vision</h2>
                            <p className=" text-neutral-400 max-w-[400px]">Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                         </div> 
                    </div>
                    <div className=" flex items-center p-3 justify-between">
                         <div>
                            <VscServerEnvironment className=" text-5xl text-accent-orange"/>
                         </div>
                         <div>
                             <h2 className=" text-2xl font-bold text-accent font-open">Our mission</h2>
                             <p className=" text-neutral-400 max-w-[400px]">Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                         </div>
                    </div>

                </div>
            </div>
            
        </div>
         <hr className=" w-[80%] mx-auto my-5 h-[2px]  bg-slate-300" />

         <div className=" min-h-[400px] space-y-4">
            <h3 className="text-accent text-xl font-source uppercase text-center tracking-wider">| <span className=" text-accent-orange">02 </span> PROCESS |</h3>
            <h2 className=" text-2xl text-accent font-bold text-center">Our Main Focus</h2>

            <div className=" w-[80%] mx-auto flex flex-wrap justify-center gap-5">
                {
                    process.map((process)=> {
                        return(
                            <div key={process.id} className=" p-6 w-[300px] h-auto bg-gradient-to-b from-[#FFF6F2] overflow-hidden to-[#EEC1AC] flex flex-col space-y-2">
                                <div className=" w-14 h-14  p-2 rounded-full bg-accent-orange flex">
                                    <span className=" m-auto text-2xl text-white font-bold ">{process.processNum}</span>
                                </div>
                                <h2 className=" text-2xl font-bold text-accent">{process.processTitle}</h2>
                                <p className=" text-amber-700">{process.processBody}.</p>
                            </div>
                        )
                    })
                }
            </div>
         </div>
        </section>
        
     );
}
 
export default Intro;