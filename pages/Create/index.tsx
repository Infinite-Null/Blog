import Quote from "@/Components/Quote/Quote";
import { Input, Grid, Button } from "@nextui-org/react";
import classes from "../../styles/Create/Create.module.css"
export default function create(){
    return <>
    <Quote title1="Share Thought" title2="Create a Blog"/><div className={classes.main}>
      
      <div className={classes.contain}>
      <Input
        rounded
        bordered
        size="xl"
        labelLeft="Title"
        placeholder="Rain In Hell"
        clearable
        color="secondary"
      />
      <p className={classes.title}>Discription</p>
      <textarea name="discription" className={classes.dis} cols={30}></textarea>
      <Input
        rounded
        bordered
        size="xl"
        labelLeft="Keyword"
        placeholder="Tech Web"
        clearable
        color="secondary"
      />
      <Button shadow color="secondary" auto>
        Create
      </Button>
      </div>
      <div className={classes.imageConatiner}>

      </div>
  </div>
    </>
}