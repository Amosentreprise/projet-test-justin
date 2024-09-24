
import { CiPhone } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ParticlesComponent from "../../Components/ParticleBackground";
import Loader from "../../Components/Loader";
import logo from "../../assets/logooriginal.png"

import { FaRegEye } from "react-icons/fa"; //eye
import { FaRegEyeSlash } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName:"",
    mail:"",
    telephone: "",
    password: "",
  });
  const [hidePassword, sethidePassword] = useState(true);
  const formFields = [
    {
      id: 1,
      type: "text",
      placeholder: "Votre Nom et Prénoms",
      name: "fullName",
      icone: FaRegUser,
    },
    {
      id: 1,
      type: "mail",
      placeholder: "Votre mail",
      name: "mail",
      icone: IoIosMail,
    },
    {
      id: 1,
      type: "tel",
      placeholder: "Votre numero de telephone",
      name: "telephone",
      icone: CiPhone,
    },
    {
      id: 2,
      type: hidePassword ? "password" : "text",
      placeholder: "Votre mot de passe",
      name: "password",
      icone: RiLockPasswordLine,
    },
  ];
  const [loader, setLoader] = useState(false);
  const [disable, setDisable] = useState(true);
  function handleChange(e) {
    const { name, value } = e.target;

    setUser((user) => ({ ...user, [name]: value }));
  }
  
    
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    if (user.password && user.telephone) {
      setLoader(true);

    
    }
  }
  useEffect(() => {
    if (user.password && user.telephone && user.fullName && user.mail) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [user]);
  return (
    <div className="h-screen w-full flex justify-center items-center bg-white  relative overflow-hidden font-monteserat">
      <ToastContainer />
      <ParticlesComponent/>
      <Loader visible={loader} />
      <div className="flex  bg-primary rounded-xl shadow-sm p-7 h-auto">
        <div className="m-auto ">
          <form
            onSubmit={handleSubmit}
            className="sm:w-[250px] md:w-[500px] lg:w-[500px] m-auto h-auto flex flex-col "
          >
           <a href="/" onClick={()=> localStorage.setItem('selectedOption', 0)}><img src={logo} alt="" className="w-32 h-20 object-cover mx-auto" /></a> 
            <h1 className="text-accent font-semibold py-4 text-xl md:text-2xl text-center">
              Bienvenue sur <span className="text-accent-orange">Pas2com Immobilier</span> 
            </h1>
            <div className="flex flex-col ">
              {formFields.map((field) => (
                <div
                  className="my-4 relative"
                  key={field.id}
                >
                  <input
                    type={field.type}
                    name={field.name}
                    onChange={handleChange}
                    value={user[field.name]}
                    className="bg-primary py-2  rounded-md w-full pl-8 focus:outline-none border border-slate-400"
                    placeholder={field.placeholder}
                  />
                  <field.icone className="absolute left-1 top-3 bottom-0 text-xl text-accent font-bold" />
                  {field.name === "password" ? (
                    <div className="absolute right-2 top-3 bottom-0">
                      {hidePassword ? (
                        <FaRegEye
                          onClick={() => sethidePassword(!hidePassword)}
                          className="text-xl"
                        />
                      ) : (
                        <FaRegEyeSlash
                          onClick={() => sethidePassword(!hidePassword)}
                          className="text-xl"
                        />
                      )}
                    </div>
                  ) : null}
                </div>
              ))}

              <Link
                to="/login"
                className="text-center font-bold hover:text-accent-orange"
              >
                Avez vous un compte ?
              </Link>
              <Link to="/register">
                <button   disabled={disable} className="disabled:bg-accent disabled:cursor-not-allowed w-full uppercase text-center bg-accent-orange text-white font-semibold border-none  rounded-xl py-2 px-3 my-3 outline-none hover:bg-accent hover:text-white">
                  S&apos;inscrire
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default SignUp;

