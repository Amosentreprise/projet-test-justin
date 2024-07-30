import properties from "../../../data/properties";
const PropertyGallery = () => {
    const galeries = properties.slice(0,3)
    return ( 
        
        <div className=" min-h-[300px] bg-secondary w-full flex">
            <div className=" w-[80%] m-auto flex flex-col space-y-3">
                <h2 className=" text-2xl font-bold text-accent">Property Gallery</h2>
                <div className="  flex  justify-between">
                    {
                        galeries.map((galerie)=>(
                            <div className="w-[30%]" key={galerie.id}>
                                <img src={galerie.image} alt="" className="w-full" />
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
     );
}
 
export default PropertyGallery;