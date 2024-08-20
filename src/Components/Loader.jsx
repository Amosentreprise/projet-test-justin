import { LuLoader2 } from "react-icons/lu";

// eslint-disable-next-line react/prop-types
const Loader = ({ visible = false }) => {
  return (
    visible && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex font-monteserat">
        <div className="m-auto bg-white h-20 w-40 flex text-2xl justify-evenly items-center rounded-md">
          <span className="text-secondary animate-spin">
            <LuLoader2 />
          </span>
          <span>Loading</span>
          <span className=" animate-pulse">...</span>
        </div>
      </div>
    )
  );
};

export default Loader;
