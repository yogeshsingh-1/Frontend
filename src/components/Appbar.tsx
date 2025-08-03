import { Link } from "react-router-dom";
// import { Avatar } from "./BlogCard"
import Profile from "./Profile";
import { useLocation } from "react-router-dom";

const Appbar = () => {
  const { pathname } = useLocation();
  const isUserRoute = pathname.startsWith("/user");
  return (
    <div className="bg-white border-b flex justify-between px-10 py-4 ">
      <Link to="/" className="cursor-pointer">
        <div className="text-[22px] font-extrabold font-serif">Medium</div>
      </Link>

      <div className="flex items-center gap-4 ">
        {isUserRoute && (
          <Link to="/user/publish">
            <button
              type="button"
              className=" text-white bg-green-700 hover:bg-green-800  rounded-full  px-4 py-1 text-center  text-sm font-thin"
            >
              Publish
            </button>
          </Link>
        )}

        {isUserRoute && (
          <Link to="/user/blogs">
            <button
              type="button"
              className="text-gray-700 hover:text-black border border-gray-300 hover:border-black rounded-full px-4 py-1 text-sm font-medium transition-colors duration-200"
            >
              Explore Blogs
            </button>
          </Link>
        )}
        {isUserRoute && <Profile />}
      </div>
    </div>
  );
};

export default Appbar;
