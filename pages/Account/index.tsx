import CardB from "@/Components/Card/Card";
import { Button, Card, Spacer, Text } from "@nextui-org/react";
import classes from "../../styles/Home.module.css"
import { useState } from "react";
export default function App() {
    const [type,setType]=useState("Blogs")
  return (<div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"40px",flexDirection:"column"}}>
    <Text b css={{
        fontSize:"$4xl",
    }}>Ankit Kumar Shah</Text>
    <Text css={{
        fontSize:"$2xl",
    }}>ankit@gmail.com</Text>
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