import photo from "../../../assets/photo.jpg"
import { FaPlay } from "react-icons/fa";
const Intro = () => {
    const datas = [
        {
            id:0,
            text:"Only pay when you publish"
        },
        {
            id:1,
            text:"Unlimited featured use"
        },
        {
            id:2,
            text:"24/7 supports"
        },
    ]
    return ( 
        <div className=" min-h-[350px] bg-white  p-3">
            <div className="flex flex-wrap gap-3 py-5 w-[80%] mx-auto">
                    <div className="w-[75%] min-h-52 bg-secondary p-3 flex flex-col space-y-3">
                        <h2 className="text-accent font-source">| <span className=" text-accent-orange">01 </span>PROPERLAND INTRO |</h2>
                        <p className="text-3xl font-bold font-open text-accent w-[80%]">Buying & Selling Property
                        In An Easy Way</p>
                        <p className="text-amber-700">Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.</p>
                        <ul className=" flex gap-2">
                            {
                                datas.map((data)=>{
                                    return(
                                        <li key={data.id} className=" flex gap-2 items-center"><span className="w-6 h-6 rounded-full bg-stone-300 flex justify-center items-center"><span className="w-3 h-3 bg-accent rounded-full"></span></span> <small className=" text-neutral-500 ">{data.text}</small></li>
                                    )
                                })
                            }
                           
                            
                        </ul>
                    </div>
                    <div className="w-[20%]  relative">
                        <img src={photo} alt="" className=" w-full h-full" />
                        <div className="absolute inset-0 flex">
                             <span className="w-16 h-16 bg-white rounded-full m-auto shadow-lg flex justify-center items-center cursor-pointer">
                                <FaPlay className=" text-xl text-accent"/>
                             </span>
                        </div>
                    </div>
            </div> 
        </div>
     );
}
 
export default Intro;