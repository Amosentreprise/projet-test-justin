

import ListNeighborhoods from "../../Common/ListNeighborhoods";
import Brands from "../../Common/Brands";
const Neighborhood = () => {
    
    return ( 
        <div className=" min-h-screen bg-white space-y-4 font-open p-10">
            <h2 className="text-accent font-source text-center uppercase">| <span className=" text-accent-orange">06 </span>NeighborhoodS |</h2>
            <p className=" text-2xl text-accent text-center font-bold">Discover The Neighborhoods</p>
            
            <div className=" w-[90%] md:w-[90%] lg:w-[80%] mx-auto">
                <ListNeighborhoods/>
            </div>

            <Brands/>
        </div>
     );
}
 
export default Neighborhood;