import Footer from "../../Components/Footer";
import About from "./HomeSections/About";
import Banner from "./HomeSections/Banner";
import Blog from "./HomeSections/Blog";
import Intro from "./HomeSections/Intro";
import Neighborhood from "./HomeSections/Neighborhoods";
import Property from "./HomeSections/Property";
import Services from "./HomeSections/Services";

const Home = () => {
    return ( 
        <div >
            <Banner/>
            <Intro/>
            <Property/>
             <About/>
             <Services/>
             <Neighborhood/>
             <Blog/>
             <Footer/>
        </div>
     );
}
 
export default Home;