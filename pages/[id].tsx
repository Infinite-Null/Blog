import { Button, Card, Input, Text } from "@nextui-org/react";
import classes from '../styles/Create/Create.module.css'
export default function App(){
  console.log(classes)
   return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <div className={classes.bLogContainer}>
        <Card>
        <Card.Header css={{display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"start"}}>
        <Text  b css={{
          fontSize:"3rem",
        }}>Hello</Text>
         <Text b css={{
          fontSize:"0.9rem",
          fontWeight:"100"
        }}>23 feb 2023</Text>
        <Text css={{
          fontSize:"0.9rem"
        }}>by: Ankit Kumar Shah</Text>
         </Card.Header>
         <hr/>
         <Text css={{
            padding:"20px"
         }}>The fields of mathematics, probability, and statistics use formal definitions of randomness. In statistics, a random variable is an assignment of a numerical value to each possible outcome of an event space. This association facilitates the identification and the calculation of probabilities of the events. Random variables can appear in random sequences. A random process is a sequence of random variables whose The fields of mathematics, probability, and statistics use formal definitions of randomness. In statistics, a random variable is an assignment of a numerical value to each possible outcome of an event space. This association facilitates the identification and the calculation of probabilities of the events. Random variables can appear in random sequences. A random process is a sequence of random variables whose .</Text>
         <hr/>
        </Card>
        </div>
         <Comments/>
    </div>
   )
}
function Comments(){
    return  <div className={classes.comment}>
        <div style={{width:"100%",height:"300px",overflow:"scroll"}}>
         <EachComment comment="This is a good blog" name="Ankit Kumar Shah"/>
         <EachComment comment="This is a good blog with cool words" name="Abhijeet"/>
         <EachComment comment="great" name="Esha"/>
         <EachComment comment="This is a good blog" name="Ankit Kumar Shah"/>
         <EachComment comment="This is a good blog with cool words" name="Abhijeet"/>
         <EachComment comment="great" name="Esha"/>
        </div>
         <div style={{
            display:"flex"
         }}>
         <Input 
        size="lg" 
        placeholder="Write a comment.." 
        clearable
        underlined
      /> <Button color="secondary" auto ghost css={{marginTop:"10px",marginLeft:"10px"}}>
      {">"}
    </Button>
         </div>
    </div>
}


function EachComment({comment,name}:{comment:string,name:string}){
    return <div style={{width:"fit-content",margin:"10px"}}>
      <Text  b css={{
          fontSize:"0.9rem",
        }}>{name}</Text>
    <Card.Divider/>
    <Card.Body>
        {comment}
    </Card.Body>
</div>
}