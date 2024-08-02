import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import team1 from "../../../assets/teams/team1.png"
import team2 from "../../../assets/teams/team2.png"
import team3 from "../../../assets/teams/team3.png"
import team4 from "../../../assets/teams/team4.png"
const Experts = () => {
    const experts = [
        {
            id:0,
            nom:"Peter Parker",
            role:"Land Seller",
            photo:team1,
            background:"bg-secondary"
        },
        {
            id:1,
            nom:"Elena Gilberts",
            role:"Land Seller",
            photo:team2,
            background:"bg-accent-orange"
        },
        {
            id:2,
            nom:"Peter Parker",
            role:"Land Seller",
            photo:team3,
            background:"bg-secondary"
        },
        {
            id:3,
            nom:"Rosalia Parker",
            role:"Land Seller",
            photo:team4,
            background:"bg-secondary"
        },
    ]
    return ( 
        <div className=" w-[80%] mx-auto min-h-[500px] py-8 space-y-8">
            <h3 className="text-accent text-xl font-source uppercase text-center tracking-wider">| <span className=" text-accent-orange">06 </span> EXPERTS |</h3>
            <h2 className=" text-2xl text-accent font-bold text-center">Our Property Team</h2>

           <div className="w-full flex flex-wrap justify-center gap-5">
              {
                experts.map((expert)=>(
                    <div className="w-[250px] hover:shadow-lg">
                    <div>
                        <img src={expert.photo} alt="" />
                    </div>
                    <div className={`${expert.background} p-4`}>
                        <h2 className=" text-accent text-xl font-bold">{expert.nom}</h2>
                        <div className=" flex justify-between">
                            <small className=" text-amber-700">{expert.role}</small>
                            <ul className=" flex gap-3 items-center">
                                <li className=" text-accent"><FaFacebook/></li>
                                <li className=" text-accent"><FaLinkedin/></li>
                                <li className=" text-accent"><FaInstagramSquare/></li>
                            </ul>
                        </div>
    
                    </div>
                     
                </div>
                ))
              }
           </div>
           
        </div>
     );
}
 
export default Experts;