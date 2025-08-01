import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"


const Appbar = () => {

  return (
    <div className="border-b flex justify-between px-10 py-4 ">
      <Link to="/"className="cursor-pointer">
        <div className="text-2xl">
          Medium
        </div></Link>
      <div className="flex items-center ">
        <Link to="/publish">
        <button type="button" className="mr-8 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300  rounded-full  px-4 py-1 text-center  text-sm font-thin">Publish</button>
        </Link>

        <Avatar name="yogesh" size={8} />
      </div>
    </div>
  )
}

export default Appbar