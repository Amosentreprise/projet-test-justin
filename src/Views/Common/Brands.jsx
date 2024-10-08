import brands from "../../data/brands";
import { AiOutlineArrowRight } from "react-icons/ai";
const Brands = () => {
    return ( 
        <div className=" sm:w-[98%] md:w-[90%] lg:w-[80%] mx-auto min-h-[300px] bg-[#F5F1EF] p-6 flex">

                <div className=" m-auto space-y-3 flex flex-col">
                    <h3 className=" text-xl text-accent font-bold text-center">More than 50+ Brands Trusted World Wide</h3>
                     <div className=" flex gap-4 justify-evenly flex-wrap">
                        {
                          brands.map((brand)=>{
                            return(
                                <div className=" w-32" key={brand.id}>
                                    <img src={brand.brandImage} alt="" />
                                </div>
                            )
                          })
                        }
                     </div>
                     <button className="bg-white hover:bg-accent-orange hover:shadow-md rounded-md flex items-center p-3 gap-2 mx-auto"><span className=" text-sm text-accent">Explore now</span> <span className=" text-white w-4 h-4 rounded-full bg-accent-orange flex items-center justify-center"><AiOutlineArrowRight/></span></button>
                </div>

            </div>
     );
}
 
export default Brands;