import datas from "../../../data/properties";
import PropertyCard from "../../../Components/PropertyCard";


const Property = () => {
    return ( 
        <div className=" min-h-screen bg-primary flex p-10 w-full relative overflow-hidden ">
            <div className=" mx-auto">
            <h3 className="text-accent font-source text-center uppercase tracking-wider">| <span className=" text-accent-orange">02 </span> Featured properties |</h3>
            <h2 className=" text-accent font-open text-2xl font-bold text-center">Properties for sale in your favorite area</h2>

              <div className="w-[80%] pt-9 pb-24 flex flex-wrap justify-center gap-10 mx-auto relative z-40">
                  {
                    datas.map((data)=>{
                        return(
                            <PropertyCard key={data.id} imageCard={data.image} />
                        )
                    })
                  }

              </div>
             
            </div>

            <div className="w-[300px] p-20 rounded-t-full bg-[#EEC1AC] absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 flex justify-center items-center">
                <button className="bg-white p-2 text-accent font-kufam rounded-lg cursor-pointer relative z-30">
                    Touch with us
                </button>
            </div>
            
        </div>
     );
}
 
export default Property;