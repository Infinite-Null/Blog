import axios from "axios";
import BlogContext from "./blogContext";
import { useState } from 'react';
import { NextPageContext } from "next";

const BlogState:any=(props:any)=>{
    
    const [Login,SetLogin]=useState(false)
    const [userDetail,setUserDetail]=useState({})



    return (
        <BlogContext.Provider value={{setUserDetail,SetLogin,Login,userDetail}}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState