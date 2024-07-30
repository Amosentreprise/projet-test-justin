import customer1 from "../../assets/customers/customer1.png"
import customer2 from "../../assets/customers/customer2.png"
import customer3 from "../../assets/customers/customer3.png"
import customer4 from "../../assets/customers/customer4.png"
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Customers = ()=>{
    const customers = [
        {
            id:0,
            customerSay: `Distinctively re-engineer revolutionary services and premium  At vero accusamus  iustoDignissimos ducimus qui blanditiis praesentium voluptatum         deleniti atque corrupti quos dolores .`,
            customerView:customer1,
            customerName:"Victor Murphy",
            customerStatus:"Happy Customers"
        },
        {
            id:2,
            customerSay: `Completely synergize resource taxing relationships via premier. Professionally cultivate one-to-one customer service with robust ideas.
           Dynamically innovate resource-leveling customer service  for state of the art customer service.
            `,
            customerView:customer2,
            customerName:"Nan Petty Calvin",
            customerStatus:"Happy Customers"
        },
        {
            id:3,
            customerSay: `Distinctively re-engineer revolutionary services and ${<span className=" font-bold">premium</span>}   At vero accusamus et iustoDignissimos .`,
            customerView:customer3,
            customerName:"Ne Peeter Walker",
            customerStatus:"Happy Customers"
        },
        {
            id:4,
            customerSay: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior colla idea-sharing. Holistically pontificate installed base portals after maintainable products.Phosfluorescently engage methodologies with web-enabled technology. ",
            customerView:customer4,
            customerName:"Nancy Mithi",
            customerStatus:"Happy Customers"
        },
    ]

    return(
        <div className="min-h-screen bg-[#F3E8E2] p-14 flex">
            <div className="m-auto">
                <div className=" flex justify-between items-center">
                   <h2 className=" text-3xl font-bold font-open text-accent">What our Customers say about us</h2>
                   <div className=" flex gap-3">
                      <button className=" w-10 h-10 bg-white rounded-full hover:shadow-xl  flex"><AiOutlineArrowLeft className=" m-auto text-2xl text-accent-orange"/></button>
                      <button className=" w-10 h-10 bg-accent-orange rounded-full  hover:shadow-xl flex"><AiOutlineArrowRight className=" m-auto text-2xl text-white"/></button>
                   </div>
                
                </div>
                 <div className=" flex gap-5 overflow-auto">

                        {
                                customers.map((customer)=>{
                                    return (
                                        <div className="w-[40%] h-auto p-6 space-y-3">
                                            <div className="bg-gradient-to-r from-[#FFF6F2] to-[#EEC1AC] w-full rounded-r-[50px] rounded-tl-[40px] p-5 ">
                                                <p className=" text-amber-700">
                                                    {customer.customerSay}
                                                </p>

                                            </div>
                                            <div className=" flex gap-3 items-center">
                                                <div className=" w-14 h-14">
                                                    <img src={customer.customerView} alt=""  className=" w-full h-full object-cover"/>
                                                </div>
                                                <div>
                                                    <p className=" font-bold text-accent text-xl">{customer.customerName}</p>
                                                    <p className=" text-amber-700">{customer.customerStatus}</p>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })
                                
                            }

                 </div>

                   
                
            </div>
            
        </div>
    )
}

export default Customers;