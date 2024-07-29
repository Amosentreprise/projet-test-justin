
import icon2 from "../assets/bg/Icon2.png"
import icon1 from "../assets/bg/Icon1.png"
import icon from "../assets/iconLogo.png"
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return ( 
        <footer className=" bg-white min-h-[400px] relative overflow-hidden font-source">
            <img src={icon1} alt="" className=" absolute z-30 w-[300px] h-[300px] -bottom-10 left-0" />
            <img src={icon2} alt="" className=" absolute z-30 top-2 -right-[300px] w-[500px] h-[500px] object-cover" />
             <div className="divide-y divide-primary  w-[90%] mx-auto border-t">
                    <div className="flex divide-x justify-between  relative z-40" >
                        <div className=" flex flex-col space-y-3 my-auto" >
                          <div className="flex gap-2 items-end">
                                <img src={icon} alt="" className="w-10 h-10"/>
                                <span className=" font-inter text-accent font-bold text-xl ">ProperLand</span>
                          </div>
                          <ul className=" flex gap-3 items-center">
                            <li><FaTwitter className=" text-2xl text-accent"/></li>
                            <li><FaFacebook className=" text-2xl text-accent"/></li>
                            <li><FaLinkedin className=" text-2xl text-accent"/></li>
                            <li><FaInstagramSquare className=" text-2xl text-accent"/></li>
                            <li><FaYoutube className=" text-2xl text-accent"/></li>
                          </ul>
                                

                        </div>  
                        <div className="">
                            <hr />
                        </div>
                        <div className="p-2 border-none">
                            <h2 className=" text-xl text-accent font-bold">Get a free estimate</h2>
                            <p className=" text-amber-700 max-w-[400px]">Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.</p>
                            <div className=" flex gap-2">
                                <input type="text" className=" p-2 border-2 outline-none"  placeholder="Your email address here" />
                                <button className=" bg-accent p-3 rounded-md text-white">Subscribe Now</button>
                            </div>
                        </div>

                    </div>
                    <div className=" flex divide-x-2 justify-between px-4  relative z-40">
                        <div className=" flex gap-20 ">
                              <div>
                                  <h2 className=" text-xl font-bold text-accent">Company</h2>
                                  <ul>
                                     <li className="text-amber-700">About</li>
                                     <li className="text-amber-700">Blog</li>
                                     <li className="text-amber-700">Properties</li>
                                     <li className="text-amber-700">Agents</li>
                                     <li className="text-amber-700">Services</li>
                                     <li className="text-amber-700">Contact us</li>
                                     
                                  </ul>
                              </div>
                              <div>
                                  <h2 className=" text-xl font-bold text-accent">Services</h2>
                                  <ul>
                                     <li className="text-amber-700">About</li>
                                     <li className="text-amber-700">Blog</li>
                                     <li className="text-amber-700">Properties</li>
                                     <li className="text-amber-700">Agents</li>
                                     <li className="text-amber-700">Services</li>
                                     <li className="text-amber-700">Contact us</li>
                                     
                                  </ul>
                              </div>
                              <div>
                                  <h2 className=" text-xl font-bold text-accent">Uitility pages</h2>
                                  <ul>
                                     <li className="text-amber-700">About</li>
                                     <li className="text-amber-700">Blog</li>
                                     <li className="text-amber-700">Properties</li>
                                     <li className="text-amber-700">Agents</li>
                                     <li className="text-amber-700">Services</li>
                                     <li className="text-amber-700">Contact us</li>
                                     
                                  </ul>
                              </div>
                        </div>
                        <div>
                            <hr />
                        </div>
                        <div className=" m-1 p-8 bg-accent-orange space-y-2">
                            <h2 className=" text-accent text-xl font-semibold">Contact us</h2>
                            <p className=" flex items-center gap-2 text-accent"> <FaMapMarkerAlt/><span>329 Queensberry Street, North
                            Melbourne VIC 3051, Australia.</span></p>
                            <p className=" flex items-center gap-2 text-accent"><BsTelephoneFill/> <span>123 456 7890 </span></p>
                            <p className=" flex items-center gap-2 text-accent"><AiFillMail/> <span>support@example.com</span></p>

                        </div>

                    </div>
                    <p className="  text-center p-4 font-source">
                        Copyright © Properland | Designed by <span className=" text-accent">VictorFlow</span>  - Powered by Webflow.
                    </p>
            </div> 
          
            
        </footer>
     );
}
 
export default Footer;