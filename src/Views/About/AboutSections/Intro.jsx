
import intro from "../../../assets/about/introAbout.png"
import { VscServerEnvironment } from "react-icons/vsc";
import { IoHome } from "react-icons/io5";
const Intro = () => {
    return ( 
        <section className="  p-10 bg-stone-300">
        <div className=" w-[80%] mx-auto flex justify-between">
            <div>
               <img src={intro} alt="" className=" h-[500px] w-full object-cover" />
            </div>
            <div className=" space-y-3">
                <div className=" max-w-[500px] space-y-3">
                        <h3 className="text-accent text-2xl font-source uppercase">| <span className=" text-accent-orange">01 </span>VIntro Video |</h3>
                        <h2 className=" text-3xl text-accent font-bold font-kufam">Buying & Selling Property In An Easy Way</h2>
                        <p className=" text-amber-700">Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
                        </p>
                </div>
                <div className=" max-w-[500px] h-auto bg-white space-y-4">
                    <div className=" flex items-center p-3 justify-between">
                         <div>
                            <IoHome className=" text-5xl text-accent-orange"/>
                         </div>
                         <div>
                            <h2 className=" text-2xl font-bold text-accent font-kufam">Our Vision</h2>
                            <p className=" text-neutral-400 max-w-[400px]">Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                         </div> 
                    </div>
                    <div className=" flex items-center p-3 justify-between">
                         <div>
                            <VscServerEnvironment className=" text-5xl text-accent-orange"/>
                         </div>
                         <div>
                             <h2 className=" text-2xl font-bold text-accent font-kufam">Our mission</h2>
                             <p className=" text-neutral-400 max-w-[400px]">Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                         </div>
                    </div>

                </div>
            </div>
            
        </div>
        </section>
        
     );
}
 
export default Intro;