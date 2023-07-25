import { Card, Text } from "@nextui-org/react";
import classes from "./Card.module.css"
import { motion } from 'framer-motion';
export default function CardB({title,date,discription,name,id}:{
  title:string,
  date:string,
  discription:string,
  name:string,
  id:string
}&any){
  const text=discription
    return <motion.div  
    initial={{
      y:100,
    }}
    animate={{
      y:0
    }}
    className={classes.card}>
      <Card
      isPressable
      isHoverable
      borderWeight="bold"
      variant="bordered"
    >
      <Card.Header>
            <Text b css={{
          fontSize:"1.8rem"
        }}>{title.toUpperCase()}</Text>
          
      </Card.Header>
      <Card.Header>
            <Text b css={{
          fontSize:"1rem",
          fontWeight:"100"
        }}>{date}</Text>
      </Card.Header>
      
      <Card.Body>
        <Text css={{
         margin:"20px",
        }}>{(text.length>659)?text.slice(0,658)+"...":text}</Text>
      </Card.Body>
      <Card.Footer>
        <Text css={{
          fontSize:"1.2rem"
        }}>{`- ${name}`}</Text>
      </Card.Footer>
    </Card>
    </motion.div>
}