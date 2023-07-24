'use client';
import BlogContext from "./blogContext";
import { useState, useEffect } from 'react';

const BlogState:any=(props:any)=>{
  
    
    const [Login,SetLogin]=useState(false)
    const [userDetail,setUserDetail]=useState({})

    function setLogin(val:boolean){
        SetLogin(()=>val)
    }
    function setUserDetails(val:any){
        setUserDetail((prev)=>prev=val)
    }
    useEffect(()=>{
        console.log(Login)
    },[Login,userDetail])

    return (
        <BlogContext.Provider value={{setUserDetails,setLogin,Login,userDetail}}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState