import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBath, FaParking, FaBed, FaRuler   } from "react-icons/fa";
const PropertyCard = ({imageCard, color="bg-white"}) => {
    return ( 
        <div className={`sm:w-[90%] md:w-[80%] lg:w-[45%] h-auto flex flex-col space-y-3 p-5   ${color}`}>
            <img src={imageCard} alt="" className="w-full h-[200px] object-cover" />
            <div className=" flex justify-between flex-wrap items-center font-open">
                <span className=" text-accent-orange text-2xl font-bold">300/MO</span>
                <button className=" text-xl text-accent bg-accent-orange p-1 rounded-md">For sale</button>
            </div>
            <div className=" space-y-2">
                <p className=" text-xl font-open text-accent font-bold">Comefortable Appartment</p>
                <p className=" flex gap-2 font-source items-center"> <FaMapMarkerAlt className="text-accent-orange"/> <span>709 West Drive Chicago, IL 60606</span></p>
            </div>
            <ul className="flex flex-wrap gap-2">
                 <li className=" flex items-center gap-2 text-accent border p-3"><span><FaBed/></span> | <span className=" text-sm">3 Beds</span></li>
                 <li className=" flex items-center gap-2 text-accent border p-3"><span> <FaBath/></span> | <span className=" text-sm">2 baths</span></li>
                 <li className=" flex items-center gap-2 text-accent border p-3"><span><FaParking/></span> | <span className=" text-sm">1 parking</span></li>
                 <li className=" flex items-center gap-2 text-accent border p-3"><span><FaRuler/></span> | <span className=" text-sm">120sqft</span></li>
                 
            </ul>

        </div>
     );
}
 
export default PropertyCard;