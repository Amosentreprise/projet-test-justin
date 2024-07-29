import homeIcon from "../../../assets/homeIcon.png"
import { FaDollarSign } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";

const Services = () => {
    const services = [
        {
            id:0,
            title:"Rent a Home",
            icon:FaDollarSign,
            contenu:"High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive."
        },
        {
            id:1,
            title:"Sale a Home",
            icon:FaHandshake,
            contenu:"Frameworks to provide a robust synopsis for high level overviews. approaches lverall, Organically grow the holistic."
        },
        {
            id:2,
            title:"buy a Home",
            icon:FaHandHolding,
            contenu:"Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches lverall value proposition."
        },
        {
            id:3,
            title:"Experience Agent",
            icon:FiUser,
            contenu:"Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches lverall value proposition."
        },
        {
            id:4,
            title:"Member support",
            icon:BsTelephoneFill,
            contenu:"Leverage agile frameworks to provide a robust synopsis for high level overviews. lverall value proposition Organically grow holistic ."
        },
    ]
    return ( 
        <div className=" min-h-screen bg-white font-kufam">
            <div className=" space-y-5">
                 <h3 className="text-accent font-source text-center uppercase">| <span className=" text-accent-orange">05 </span> services |</h3>
                 <h2 className=" text-2xl text-accent text-center font-bold max-w-[400px] mx-auto">See How Can Help</h2>
            </div>

            <div className="w-[80%] mx-auto flex gap-5 justify-evenly flex-wrap items-center py-8">
                {
                    services.map((service)=>{
                        return(
                        <div className=" w-[300px] flex flex-col" key={service.id}>
                            <div className="relative mx-auto w-20 h-20 bg-gradient-to-r from-[#FFF6F2] to-[#EEC1AC] rounded-t-full flex ">
                                <img src={homeIcon} alt="" className=" m-auto w-14 h-12 " />
                                <div className=" w-6 h-6 flex bg-white rounded-full absolute left-1/2 top-2 transform -translate-x-1/2">
                                    <service.icon className="m-auto"/>
                                </div>
                            </div>
                            <h3 className=" text-xl text-accent font-bold text-center">{service.title}</h3>
                            <p className="text-neutral-400 text-center max-w-[300px]">{service.contenu}</p>
                        </div>
                        )
                    })
                }
                
            </div>
            
        </div>
     );
}
 
export default Services;