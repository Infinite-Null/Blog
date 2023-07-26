
import { useState } from "react";
import BlogContext from "./blogContext";

export default function BlogState(props:any){
    const [user,setUSer]=useState(true)
    return <BlogContext.Provider value={
       {
        user:user,
        setUSer:setUSer
       }
    }>
  {props.children}
    </BlogContext.Provider>
}