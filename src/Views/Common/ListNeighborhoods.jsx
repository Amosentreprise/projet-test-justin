import datas from "../../data/neighborhoods"
import { AiOutlineArrowRight } from "react-icons/ai";

const ListNeighborhoods = () => {
    return ( 
        <div className="flex flex-wrap gap-5 w-full justify-center ">
                    {
                        datas.map((data)=>{
                            return(
                                <div key={data.id} className=" w-[200px] h-[250px] relative hover:scale-105 transition-all">
                                    <img src={data.image} alt="" className="h-full w-full object-cover" />
                                    <div className=" bg-black bg-opacity-50 absolute inset-0">
                                        <div className=" h-full flex flex-col justify-between p-2">
                                            <div className=" flex justify-between">
                                               <p></p>
                                               <div className=" text-white bg-neutral-400 w-6 h-6 rounded-full flex"><AiOutlineArrowRight className=" m-auto"/></div>
                                            </div>
                                            <div>
                                                <p className=" text-white">{data.name}</p>
                                                <p className=" text-accent-orange">{data.nbreProperty} Property</p>
                                            </div>
                                        </div>
                                        

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
     );
}
 
export default ListNeighborhoods;