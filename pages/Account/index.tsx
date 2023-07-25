import CardB from "@/Components/Card/Card";
import { Button, Card, Spacer, Text } from "@nextui-org/react";
import classes from "../../styles/Home.module.css"
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
export default function App() {
    const [type,setType]=useState("Blogs")
    const Data:any=useSession()
    const router=useRouter()
  if(Data.status!=='loading'){
    if(Data.status==='unauthenticated'){
      return <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"80vh"
      }}>
        <Button 
      auto ghost
      onPress={()=>{
        router.push('/Login')
      }}
      css={{
        width:"fit-content",
        marginTop:"10px"
       }}>Login</Button>
      </div>
    }
  return (
  <div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"40px",flexDirection:"column"}}>
    <Text b css={{
        fontSize:"$4xl",
    }}>{Data.data?.user?.Name}</Text>
    <Text css={{
        fontSize:"$2xl",
    }}>{Data.data?.user?.email}</Text>
  </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"40px",flexDirection:"row"}}>
    <Button.Group color="secondary" animated>
      <Button onPress={()=>{
        setType(()=>"Blogs")
      }}>Blogs</Button>
      <Button onPress={()=>{
        setType(()=>"Liked")
      }}>Liked</Button>
    </Button.Group>
    </div>
    {(type==="Blogs")?<div className={classes.blogs}>
        <CardB/>
        <CardB/>
        <CardB/>
        <CardB/>
        <CardB/>
        <CardB/>
        <CardB/>
    </div>:<div className={classes.blogs}>
        <CardB/>
        <CardB/>
    </div>}
  </div>
  );
  }
}