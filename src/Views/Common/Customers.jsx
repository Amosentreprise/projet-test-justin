import { useState, useRef, useEffect } from "react";
import customer1 from "../../assets/customers/customer1.png";
import customer2 from "../../assets/customers/customer2.png";
import customer3 from "../../assets/customers/customer3.png";
import customer4 from "../../assets/customers/customer4.png";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Customers = () => {
  const customers = [
    {
      id: 0,
      customerSay: `Distinctively re-engineer revolutionary services and premium At vero accusamus iustoDignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.`,
      customerView: customer1,
      customerName: "Victor Murphy",
      customerStatus: "Happy Customers"
    },
    {
      id: 1,
      customerSay: `Completely synergize resource taxing relationships via premier. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.`,
      customerView: customer2,
      customerName: "Nan Petty Calvin",
      customerStatus: "Happy Customers"
    },
    {
      id: 2,
      customerSay: `Distinctively re-engineer revolutionary services and premium At vero accusamus et iustoDignissimos.`,
      customerView: customer3,
      customerName: "Ne Peeter Walker",
      customerStatus: "Happy Customers"
    },
    {
      id: 3,
      customerSay: `Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior colla idea-sharing. Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage methodologies with web-enabled technology.`,
      customerView: customer4,
      customerName: "Nancy Mithi",
      customerStatus: "Happy Customers"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const itemsPerView = {
    sm: 1,
    md: 2,
    lg: 3
  };

  const [itemsToShow, setItemsToShow] = useState(itemsPerView.lg);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(itemsPerView.sm);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(itemsPerView.md);
      } else {
        setItemsToShow(itemsPerView.lg);
      }
    };

    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex < customers.length - itemsToShow) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    const translateX = currentIndex * -100 / itemsToShow;
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${translateX}%)`;
    }
  }, [currentIndex, itemsToShow]);

  return (
    <div className="min-h-screen bg-[#F3E8E2] p-14 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-3xl font-bold font-open text-accent">What our Customers say about us</h2>
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className={`w-10 h-10 bg-white rounded-full hover:shadow-xl flex justify-center items-center ${currentIndex === 0 && "opacity-50 cursor-not-allowed"}`}
              disabled={currentIndex === 0}
            >
              <AiOutlineArrowLeft className="text-2xl text-accent-orange" />
            </button>
            <button
              onClick={handleNext}
              className={`w-10 h-10 bg-accent-orange rounded-full hover:shadow-xl flex justify-center items-center ${currentIndex >= customers.length - itemsToShow && "opacity-50 cursor-not-allowed"}`}
              disabled={currentIndex >= customers.length - itemsToShow}
            >
              <AiOutlineArrowRight className="text-2xl text-white" />
            </button>
          </div>
        </div>
        <div className="overflow-hidden relative">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${customers.length * 100 / itemsToShow}%` }}
          >
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="flex-shrink-0 w-full p-6 "
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="bg-gradient-to-r from-[#FFF6F2] to-[#EEC1AC] rounded-r-[50px] rounded-tl-[40px] p-5 w-[60%] h-auto">
                  <p className="text-amber-700">{customer.customerSay}</p>
                </div>
                <div className="flex gap-3 items-center mt-3">
                  <div className="w-14 h-14">
                    <img
                      src={customer.customerView}
                      alt={customer.customerName}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-accent text-xl">{customer.customerName}</p>
                    <p className="text-amber-700">{customer.customerStatus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
