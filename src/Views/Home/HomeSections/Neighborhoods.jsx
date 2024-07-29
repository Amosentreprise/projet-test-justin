import { AiOutlineArrowRight } from "react-icons/ai";
import brands from "../../../data/brands";
import ListNeighborhoods from "../../Common/ListNeighborhoods";
const Neighborhood = () => {
    
    return ( 
        <div className=" min-h-screen bg-white space-y-4 font-kufam p-10">
            <h2 className="text-accent font-source text-center uppercase">| <span className=" text-accent-orange">06 </span>NeighborhoodS |</h2>
            <p className=" text-2xl text-accent text-center font-bold">Discover The Neighborhoods</p>
            
            <div className=" w-[80%] mx-auto">
                <ListNeighborhoods/>
            </div>

            <div className=" w-[80%] mx-auto min-h-[300px] bg-[#F5F1EF] p-6 flex">

                <div className=" m-auto space-y-3 flex flex-col">
                    <h3 className=" text-xl text-accent font-bold text-center">More than 50+ Brands Trusted World Wide</h3>
                     <div className=" flex gap-4 justify-evenly flex-wrap">
                        {
                          brands.map((brand)=>{
                            return(
                                <div className=" w-32">
                                    <img src={brand.brandImage} alt="" />
                                </div>
                            )
                          })
                        }
                     </div>
                     <button className="bg-white rounded-md flex items-center p-3 gap-2 mx-auto"><span className=" text-sm text-accent">Explore now</span> <span className=" text-white w-4 h-4 rounded-full bg-accent-orange flex items-center justify-center"><AiOutlineArrowRight/></span></button>
                </div>

            </div>
        </div>
     );
}
 
export default Neighborhood;