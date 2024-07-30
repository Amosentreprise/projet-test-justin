import Footer from "../../Components/Footer";
import Brands from "../Common/Brands";
import Customers from "../Common/Customers";
import Statistics from "../Common/Statistics";
import Banner from "./AboutSections/Banner";
import Experts from "./AboutSections/Experts";
import Intro from "./AboutSections/Intro";
import LearnMore from "./AboutSections/LearnMore";

const About = () => {
    return ( 
        <div>
            <Banner/>
            <Intro/>
            <Customers/>
            <LearnMore/>
            <section className=" bg-accent-orange">
                <div className="w-[80%] mx-auto ">
                  <Statistics/>
                </div>
            </section>
            <Experts/>
            <Brands/>
            <Footer/>
        </div>
     );
}
 
export default About;