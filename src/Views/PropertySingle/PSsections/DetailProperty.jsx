import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBath, FaParking, FaBed, FaRuler   } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
const DetailProperty = () => {
    return ( 
        <div className=" min-h-screen text-zinc-500">
            <div className=" min-h-[100px] flex  flex-wrap justify-between w-[80%] mx-auto py-10">
                <div className=" max-w-[500px]">
                    <p className=" flex gap-2 font-source items-center"> <FaMapMarkerAlt className="text-accent-orange"/> <span>709 West Drive Chicago, IL 60606</span></p>
                    <h2 className=" text-2xl text-accent font-bold">Modern Loft in Land River</h2>
                    <p className=" text-stone-400">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically .</p>
                </div>
                <div className=" flex flex-col space-y-3">
                <span className=" text-accent-orange text-2xl font-bold">$300 /MO</span>
                
                <ul className="flex flex-wrap gap-2">
                    <li className=" flex items-center gap-2 text-accent border p-1"><span><FaBed/></span> | <span className=" text-sm">3 Beds</span></li>
                    <li className=" flex items-center gap-2 text-accent border p-1"><span> <FaBath/></span> | <span className=" text-sm">2 baths</span></li>
                    <li className=" flex items-center gap-2 text-accent border p-1"><span><FaParking/></span> | <span className=" text-sm">1 parking</span></li>
                    <li className=" flex items-center gap-2 text-accent border p-1"><span><FaRuler/></span> | <span className=" text-sm">120sqft</span></li>
                    
                </ul>
                <div>
                    <button className=" text-xl text-white bg-accent p-2 rounded-md hover:shadow-md text-center">For sale</button>
                </div> 
                </div>
            </div>
            
            <hr className=" my-3 h-1 w-[80%] mx-auto"/>

           <div className=" w-[80%] mx-auto flex flex-wrap justify-between py-9">
                <div className=" space-y-5 max-w-[500px]">
                        <h2 className=" text-2xl text-accent font-bold">About the property</h2>
                        <p>Laminate flooring is a more affordable option in place of hardwood flooring that can cost almost ten times the cost of laminate flooring. Laminate flooring is light, durable and can be made to resemble.</p>
                        <p>Appropriately empower dynamic leadership skills after business portals. Globally my cardinate interactive supply chains with distinctive <span className=" text-accent font-bold">quality vectors global sources services.</span>Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements.</p>
                        
                        <ul>
                            <li className=" flex gap-3"><span className=" text-2xl"><GoDotFill/></span><span>Dynamically target high-payoff intellectual capital for customized</span></li>
                            <li className=" flex gap-3"><span className=" text-2xl"><GoDotFill/></span><span>Interactively procrastinate high-payoff content</span></li>
                            <li className=" flex gap-3"><span className=" text-2xl"><GoDotFill/></span><span>Credibly reinter mediate backend ideas for cross-platform models</span></li>
                        </ul>
                        <p>Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.</p>
                    
                </div>

                <div className="w-[300px] h-auto bg-primary p-5">

                </div>

           </div>

           <div className=" w-[80%] mx-auto flex flex-wrap justify-between py-9">
             <div className=" max-w-[500px] space-y-6">
                 <div className=" w-full min-h-32 bg-accent p-5 flex">
                    <p className="mx-auto"></p>
                 </div>
                       <h2 className=" text-2xl text-accent font-bold">Make real time a build services</h2>

                        <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                        
                        <ul>
                            <li className=" flex gap-3"><span className="">1. Dynamically target high-payoff intellectual capital for customized</span></li>
                            <li className=" flex gap-3"><span className="">2. Interactively procrastinate high-payoff content</span></li>
                            <li className=" flex gap-3"><span className="">3. Credibly reinter mediate backend ideas for cross-platform models</span></li>
                            <li className=" flex gap-3"><span className="">4. Credibly reinter mediate backend ideas for cross-platform models</span></li>
                        </ul>
                        <p>It is a long established fact that a reader will be distracted by the readable content page when looking at its layout. The point of using Lorem Ipsum is that it more-or-less normal distribution of letters, as felt opposed to using 'Content here making it look like readable.</p>
             </div>

              <div className="w-[300px] h-auto bg-primary p-5">

              </div>

           </div>
            

        </div>
        
     );
}
 
export default DetailProperty;