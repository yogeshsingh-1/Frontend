import { useEffect, useState } from "react"
import { backend_url } from "../config";
import axios from "axios";

export const useBlogs = ()=>{
    const [loading,setLoading] = useState(true);
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        axios.get(`${backend_url}/api/v1/blog/bulk`).then(res=>{
            setBlogs(res.data.blog);
        }).catch(e=>console.log(e))
        .finally(()=>{
            setLoading(false);
        })
    },[])
    return {
        loading,blogs
    }
}
