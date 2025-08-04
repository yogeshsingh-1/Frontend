import Appbar from "../components/Appbar";
import FullBlog from "../components/FullBlog";
import Skelton from "../components/Skelton";
// import Skelton from "../components/Skelton";
import { useBlog } from "../hooks/index";
import { useParams } from "react-router-dom";
// import { BlogCardProps } from "../components/FullBlog";
const Blog = () => {

  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

 if (loading) {
    return <Skelton/>
  }
 if (!blog) {
  return <div className="w-full h-screen ">
    <Appbar/>
    <div className="text-gray-500 text-md font-medium fixed inset-0 flex items-center justify-center bg-opacity-60 ">Blog not found!</div>
  </div>; 
}
return <FullBlog blog={blog}/>;
}

export default Blog