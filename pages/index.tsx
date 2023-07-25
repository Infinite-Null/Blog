import Quote from '@/Components/Quote/Quote'
import { Inter } from 'next/font/google'
import classes from '../styles/Home.module.css'
import { Pagination } from '@nextui-org/react'
import axios from 'axios'
import { useState,useEffect, Dispatch, SetStateAction } from 'react';
import CardB from '@/Components/Card/Card'
import dayjs from 'dayjs'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [blogs,setBlogs]:[any,Dispatch<SetStateAction<any>>,]=useState(null)
  const [loding,setLoding]=useState(false)
  const [page,setPage]=useState(1)
  const [totalPage,setTotal]=useState(0)
  // const totalPage=Math.ceil(6)
  async function getData(){
    setLoding(()=>true)
   const users= await axios.get(`http://localhost:3000/api/Blogs?page${page}`)
   const finalValue={
    Blogs:users.data.Blogs
   }
    setBlogs(()=>finalValue);
    const total=Math.ceil(users.data.Total/users.data.EachPage)
    setTotal(()=>total)
    setLoding(()=>false)
  }
 useEffect(() => {
  getData(); // run it, run it
  return () => {
  };
},[])
useEffect(()=>{
  console.log(blogs)
},[blogs])

  return <div>
   <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
   <Quote title1='Conversation is king.' title2='Content is just something to talk about.'/>
   {(!loding)&&<>
   <div className={classes.blogs}>
    {blogs?.Blogs?.map((e:{
            _id: string,
            users: {
                _id: string,
                name: string
            },
            title: string,
            discription: string,
            createdAt:string
        },i:any)=><CardB title={e.title} date={(dayjs(Date.parse(e.createdAt)).format("MM/DD/YYYY")).toString()} discription={e.discription} name={e.users.name} id={e._id} key={i}/>)}
    </div>
    <Pagination shadow total={totalPage} initialPage={1} css={{
      marginTop:"20px",
      marginBottom:"20px"
    }}/>
   </>}
  </div>
  </div>
}

