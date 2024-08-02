
import icon1 from "../../../assets/bg/Icon1.png"
import icon2 from "../../../assets/bg/Icon2.png"

import blog1 from "../../../assets/blog1.png"
import blog2 from "../../../assets/blog2.png"
import { AiOutlineArrowRight } from "react-icons/ai";

const Blog = () => {
    const blogs = [
        {
            id:0,
            image:blog1,
            date:"Novembre 21, 2021 | Architecture",
            title:"Here's how to decorate your new from scratch"
        },
        {
            id:0,
            image:blog2,
            date:"Novembre 21, 2021 | Architecture",
            title:"Here's how to decorate your new from scratch"
        },
    ]
    return ( 
        <div  className=" min-h-screen bg-primary font-open flex justify-center items-center p-10 relative overflow-hidden">
            <img src={icon1} alt="" className=" absolute top-0 left-0 z-30 w-[300px] h-[300px]" />
            <img src={icon2} alt="" className=" absolute top-10 -right-32 z-30 w-[300px] h-[500px]" />

            <div className="flex flex-col space-y-7 relative z-40">
                <div className="">
                 <h2 className="text-accent font-source text-center">| <span className=" text-accent-orange">06 </span>BLOG |</h2>
                 <p className=" text-2xl text-accent text-center font-bold">Discover The Neighborhoods</p>
                </div>
                <div className=" flex gap-5 flex-col">
                   {
                    blogs.map((blog)=>{
                        return(
                            <div className=" max-w-[400px] space-y-2" key={blog.id}>
                                <img src={blog.image} alt="" />
                                <div className=" space-y-4">
                                    <p className=" text-amber-700 text-center">{blog.date}</p>
                                    <p className=" text-accent font-bold text-2xl text-center">{blog.title}</p>
                                </div>
                            </div>
                        )
                    })
                   }
                </div>
                <button className="mx-auto bg-white rounded-md hover:shadow-md flex items-center p-3 gap-2"><span className=" text-sm text-accent">See All Articles</span> <span className=" text-white w-4 h-4 rounded-full bg-accent flex items-center justify-center"><AiOutlineArrowRight/></span></button>
               

            </div>
            
        </div>
     );
}
 
export default Blog;