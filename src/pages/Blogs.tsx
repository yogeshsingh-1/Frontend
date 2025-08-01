
import Appbar from '../components/Appbar'
import BlogCard from '../components/BlogCard'
import Skelton from '../components/Skelton';
import { useBlogs } from '../hooks'
const Blogs = () => {
  const { loading, blogs } = useBlogs();

  // loading skelton
  if (loading) {
    return <Skelton/>
    

  }
  return (
    <div>
      <Appbar />
      <div className='my-4 flex justify-center flex-wrap gap-5'>
        {blogs.map((res: { title: string, content: string, author: { username: string },id:number }) => <BlogCard
          authorName={res.author.username} title={res.title} publishedDate="2nd feb 2025" content={res.content} id={res.id} />)}

      </div>
    </div>
  )
}

export default Blogs