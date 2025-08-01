import { Link } from "react-router-dom";
// import { Avatar } from "./BlogCard"

const Appbar1 = () => {
  return (
    <div className=" z-50 shadow  sticky top-0 border-b border-black  ">
      <div className="flex justify-between px-10 py-3 xl:mx-52">
        <Link to="/" className="cursor-pointer">
          <div className="text-[22px] font-extrabold font-serif">Medium</div>
        </Link>
        <div className="flex items-center gap-6 ">
          <div className="cursor-pointer text-[#242424] text-[12px] hidden md:block ">
            Our story
          </div>
          <div className="cursor-pointer text-[#242424] text-[12px] hidden md:block">
            Membership
          </div>
          <div className="cursor-pointer text-[#242424] text-[12px] hidden md:block">
            Write
          </div>
          <Link to="/signin">
            <div className="cursor-pointer text-[#242424] text-[12px] hidden sm:block md:block">
              Sign in
            </div>
          </Link>
          <div>
            <button
              type="button"
              className="cursor-pointer text-white bg-[#191919]  rounded-full px-[16px] py-[7px] text-center font-[14px] text-xs "
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar1;
