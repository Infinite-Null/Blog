import { Card, Text } from "@nextui-org/react";
import classes from "./Card.module.css"
import { motion } from 'framer-motion';
export default function CardB(){
  const text="The fields of mathematics, probability, and statistics use formal definitions of randomness. In statistics, a random variable is an assignment of a numerical value to each possible outcome of an event space. This association facilitates the identification and the calculation of probabilities of the events. Random variables can appear in random sequences. A random process is a sequence of random variables whose The fields of mathematics, probability, and statistics use formal definitions of randomness. In statistics, a random variable is an assignment of a numerical value to each possible outcome of an event space. This association facilitates the identification and the calculation of probabilities of the events. Random variables can appear in random sequences. A random process is a sequence of random variables whose ."
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
        }}>Rain Or Pain</Text>
          
      </Card.Header>
      <Card.Header>
            <Text b css={{
          fontSize:"1rem",
          fontWeight:"100"
        }}>23 feb 2023</Text>
      </Card.Header>
      
      <Card.Body>
        <Text css={{
         margin:"20px",
        }}>{(text.length>659)?text.slice(0,658)+"...":text}</Text>
      </Card.Body>
      <Card.Footer>
        <Text css={{
          fontSize:"1.2rem"
        }}>- Ankit Kumar Shah</Text>
      </Card.Footer>
    </Card>
    </motion.div>
}