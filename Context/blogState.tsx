import BlogContext from "./blogContext";
import { useState } from 'react';

const BlogState:any=(props:any)=>{
    const [Login,SetLogin]=useState(false)
    const [userDetail,setUserDetail]=useState({})
    return (
        <BlogContext.Provider value={{}}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState