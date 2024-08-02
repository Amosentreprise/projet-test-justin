import Footer from "../../Components/Footer";
import Banner from "./PropertySections/Banner";
import PropertyHome from "../Home/HomeSections/Property"
import ListNeighborhoods from "../Common/ListNeighborhoods";

const Property = () => {
    return ( 
        <div>
            <Banner/>
             <PropertyHome/>
             <div className="min-h-[500px] bg-white w-[80%] mx-auto flex flex-col justify-center space-y-3 py-5">
             <h2 className="text-accent font-source text-center uppercase">| <span className=" text-accent-orange">06 </span>NeighborhoodS |</h2>
             <p className=" text-2xl text-accent text-center font-bold">Discover The Neighborhoods</p>
                <ListNeighborhoods/>
             </div>
             <Footer/>
        </div>
     );
}
 
export default Property;