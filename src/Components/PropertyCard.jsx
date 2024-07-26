import { FaMapMarkerAlt } from "react-icons/fa";
const PropertyCard = ({imageCard}) => {
    return ( 
        <div className="sm:w-[80%] md:w-[40%] lg:w-[40%] h-auto flex flex-col space-y-3 p-5  bg-white">
            <img src={imageCard} alt="" className="w-full h-[200px] object-cover" />
            <div className=" flex justify-between items-center font-kufam">
                <span className=" text-accent-orange text-2xl font-bold">300/MO</span>
                <button className=" text-xl text-accent bg-accent-orange p-1 rounded-md">For sale</button>
            </div>
            <div className=" space-y-2">
                <p className=" text-xl font-kufam text-accent font-bold">Comefortable Appartment</p>
                <p className=" flex gap-2 font-source items-center"> <FaMapMarkerAlt className="text-accent-orange"/> <span>709 West Drive Chicago, IL 60606</span></p>
            </div>

        </div>
     );
}
 
export default PropertyCard;