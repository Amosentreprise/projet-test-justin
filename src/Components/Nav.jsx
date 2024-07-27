import { Link } from "react-router-dom";
import icon from"../assets/iconLogo.png"
import { useState } from 'react'
const Nav = () => {
    const liens = [
        {
            id:0,
            link:"/",
            linkName:"Home",
        },
        {
            id:1,
            link:"/about",
            linkName:"About",
        },
        {
            id:2,
            link:"/property",
            linkName:"Proprieties",
        },
        {
            id:3,
            link:"/propertySingle",
            linkName:"PropertySingle",
        },
        {
            id:4,
            link:"/",
            linkName:"Blog",
        },
    ]
    const [selectedOption, setSelected] = useState( parseInt(localStorage.getItem("option")) || 0);
    const handleClick = (id)=>{
        setSelected(id)
    }
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
                            <li key={lien.id} className={`p-[6px] hover:bg-slate-100 hover:rounded-full font-bold ${lien.id === selectedOption ? " text-accent" : "text-black"}`} onClick={()=>handleClick(lien.id)}><Link to={lien.link}>{lien.linkName}</Link></li>
                        )
                    })
                }
                <li><button className=" bg-accent p-2 rounded-md text-white">Contact</button></li>
           </ul>
        </nav>
     );
}
 
export default Nav;