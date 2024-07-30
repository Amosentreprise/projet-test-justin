
import blog1 from "../../../assets/blog1.png"
import image2 from "../../../assets/properties/property1.png"
const LearnMore = () => {
    return ( 
        <div className=" w-[80%] mx-auto space-y-8 min-h-[500px] py-8">
            <div className=" flex items-center justify-between flex-wrap gap-2">
               <div className="max-w-[500px]">
                 <img src={blog1} alt="" className="w-full h-auto object-cover" />
               </div>
               <div className=" max-w-[500px]">
                 <h2 className=" text-2xl text-accent font-bold">Learn More About Who We Are in Real Estate</h2>
                 <p className="text-amber-700">Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore.</p>
               </div>
            </div>
            <div className=" flex  justify-between flex-wrap gap-2">
               <div className=" max-w-[500px] space-y-2">
                 <h2 className=" text-2xl text-accent font-bold">We're reinventing the space</h2>
                 <p className="text-amber-700">Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore.</p>
                 <div>
                    <h3 className=" text-xl font-bold text-accent">Full services</h3>
                     <p className=" text-zinc-500">Interactively procrastinate high-payoff content without backward-compatible data.</p>
                 </div>
                 <div>
                    <h3 className=" text-xl font-bold text-accent">Full services</h3>
                     <p className=" text-zinc-500">Interactively procrastinate high-payoff content without backward-compatible data.</p>
                 </div>
               </div>
               <div className="max-w-[500px]">
                 <img src={image2} alt="" className="w-full object-cover" />
               </div>
            </div>
      
        </div>
     );
}
 
export default LearnMore;