import { Avatar } from "./BlogCard"


const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
        <div className="text-2xl">
            Medium
        </div>
        <div className="">
            <Avatar name="Yogesh" size={8}/>
        </div>
    </div>
  )
}

export default Appbar