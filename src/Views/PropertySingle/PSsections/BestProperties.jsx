import PropertyCard from "../../../Components/PropertyCard";
import datas from "../../../data/properties";
const BestProperties = () => {
    return ( 
        <div className="min-h-screen bg-white p-2 relative">
            <h2 className="text-2xl text-accent font-bold w-[80%] mx-auto">Best Property Deals</h2>
            <div>
                <div className=" sm:w-full lg:w-[80%] md:w-[80%] pt-9 pb-24 flex flex-wrap justify-center gap-10 mx-auto relative z-40">
                    {
                        datas.map((data)=>{
                            return(
                                <PropertyCard key={data.id} imageCard={data.image} color="bg-secondary" />
                            )
                        })
                    }

                </div>
            </div>
            <div className="w-[300px] h-[300px] p-20 rounded-full bg-accent absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                {/* <button className="z-50  bg-accent text-white p-2 font-kufam rounded-lg cursor-pointer relative top-20 ">
                    Touch with us
                </button> */}
            </div>
        </div>
     );
}
 
export default BestProperties;