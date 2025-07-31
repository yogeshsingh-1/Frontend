import { useEffect, useState } from "react"
import { backend_url } from "../config";
import axios from "axios";

// all blogs
interface Blog {

    id: number,
    title: string,
    content: string,
    published: boolean,
    author: {
        username: string
    }

}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    useEffect(() => {
        axios.get(`${backend_url}/api/v1/blog/bulk`,
             {
                withCredentials: true   
            }
        //      {
        //     headers: {
        //         Authorization: localStorage.getItem("token")
        //     }
        // }
    ).then(res => {
            setBlogs(res.data.blog);
            console.log(res.data);
        }).catch(e => console.log(e))
            .finally(() => {
                setLoading(false);
            })
    }, [])
    return {
        loading, blogs
    }
}

// blog by id
export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    useEffect(() => {
        axios.get(`${backend_url}/api/v1/blog/${id}`,
            {
                withCredentials: true   
            }
            //      {
            //     headers: { 
            //         Authorization: localStorage.getItem("token")
            //     }
            // }
        ).then(res => {
            setBlog(res.data.blog);
            console.log(res.data);
        }).catch(e => console.log(e))
            .finally(() => {
                setLoading(false);
            })
    }, [])
    return {
        loading, blog
    }
}
