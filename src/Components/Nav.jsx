import { Link } from "react-router-dom";
import icon from "../assets/iconLogo.png";
import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Nav = () => {
    const liens = [
        {
            id: 0,
            link: "/",
            linkName: "Home",
        },
        {
            id: 1,
            link: "/about",
            linkName: "About",
        },
        {
            id: 2,
            link: "/property",
            linkName: "Proprieties",
        },
        {
            id: 3,
            link: "/propertySingle",
            linkName: "PropertySingle",
        },
        {
            id: 4,
            link: "/",
            linkName: "Sign in",
        },
    ];

    const [selectedOption, setSelected] = useState(() => {
        return parseInt(localStorage.getItem('selectedOption')) || 0;
    });
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = (id) => {
        setSelected(id);
        localStorage.setItem('selectedOption', id); 
    };

    useEffect(() => {
        const storedSelectedOption = localStorage.getItem('selectedOption');
        if (storedSelectedOption !== null) {
            setSelected(parseInt(storedSelectedOption));
        }
    }, []);

    return (
        <nav className="p-4 min-h-20 bg-accent-neutral w-[80%] mx-auto rounded-md flex justify-between items-center relative">
            <div className="flex gap-2 items-end">
                <img src={icon} alt="" className="w-10 h-10" />
                <span className="font-inter text-white font-bold lg:text-xl md:text-xl sm:text-sm">
                    ProperLand
                </span>
            </div>
            <ul className="lg:flex gap-5 items-center font-open sm:hidden md:hidden">
                {liens.map((lien) => (
                    <Link
                        to={lien.link}
                        className={`p-[6px] hover:bg-slate-100 hover:text-black hover:rounded-full font-semibold tracking-wider ${
                            lien.id === selectedOption ? "text-accent-orange" : "text-white"
                        }`}
                        onClick={() => handleClick(lien.id)}
                        key={lien.id}
                    >
                        <li key={lien.id}>
                            <span>{lien.linkName}</span>
                        </li>
                    </Link>
                ))}
                <li>
                    <button className="border border-accent-orange hover:bg-transparent bg-accent-orange p-2 rounded-md text-white">
                        Sign up
                    </button>
                </li>
            </ul>
            <button
                onClick={() => setIsMenuOpen(true)}
                className="md:text-3xl lg:hidden sm:text-3xl text-white"
            >
                <IoMdMenu className="cursor-pointer" />
            </button>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:block sm:block lg:hidden">
                    <div className="w-[300px] md:block sm:block lg:hidden bg-white h-full float-right p-3">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="float-right w-8 h-8 bg-accent-orange text-white text-2xl flex justify-center items-center rounded-md"
                        >
                            <MdClose />
                        </button>
                        <ul className="flex flex-col gap-5 font-open mt-8">
                            {liens.map((lien) => (
                                <Link
                                    to={lien.link}
                                    key={lien.id}
                                    onClick={() => handleClick(lien.id)}
                                    className={`p-[8px] rounded-md mt-2 ${
                                        lien.id === selectedOption
                                            ? "bg-accent-orange text-white"
                                            : "hover:bg-accent-orange hover:text-white"
                                    } font-semibold`}
                                >
                                    <li>
                                        <span>{lien.linkName}</span>
                                    </li>
                                </Link>
                            ))}
                            <button className="bg-accent p-2 rounded-md text-white hover:shadow-md">
                                Sign up
                            </button>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;
