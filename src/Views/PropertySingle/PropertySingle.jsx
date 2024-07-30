import Footer from "../../Components/Footer";
import Banner from "./PSsections/Banner";
import BestProperties from "./PSsections/BestProperties";
import DetailProperty from "./PSsections/DetailProperty";
import PropertyGallery from "./PSsections/PropertyGallery";

const PropertySingle = () => {
    return ( 
        <div className=" min-h-screen bg-white">
            <Banner/>
            <DetailProperty/>   
            <PropertyGallery/>
            <BestProperties/>
            <Footer/>

        </div>
     );
}
 
export default PropertySingle;