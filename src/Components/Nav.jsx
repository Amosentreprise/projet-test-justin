import { Link } from "react-router-dom";
import icon from"../assets/iconLogo.png"

const Nav = () => {
    const liens = [
        {
            id:0,
            link:"/",
            linkName:"Home",
        },
        {
            id:1,
            link:"/",
            linkName:"About",
        },
        {
            id:2,
            link:"/",
            linkName:"Proprieties",
        },
        {
            id:3,
            link:"/",
            linkName:"Pages",
        },
        {
            id:4,
            link:"/",
            linkName:"Blog",
        },
    ]
    return ( 
        <nav className=" p-4 min-h-20 bg-white w-[80%] mx-auto rounded-md flex justify-between items-center">
           <div className=" flex gap-2 items-end">
                <img src={icon} alt="" className="w-10 h-10"/>
                <span className=" font-inter text-accent font-bold text-xl ">ProperLand</span>
           </div>
           <ul className=" flex gap-5 items-center font-kufam">
                {
                    liens.map((lien)=>{
                        return (
                            <li key={lien.id} className=""><Link to={lien.link}>{lien.linkName}</Link></li>
                        )
                    })
                }
                <li><button className=" bg-accent p-2 rounded-md text-white">Contact</button></li>
           </ul>
        </nav>
     );
}
 
export default Nav;