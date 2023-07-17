import CardB from '@/Components/Card/Card'
import Quote from '@/Components/Quote/Quote'
import classes from '../../styles/Home.module.css'
export default function Favourite(){
    return <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
    <Quote title1='Your Liking' title2='Is what defines you.'/>
    <div className={classes.blogs}>
      <CardB/>
    <CardB/>
    <CardB/>
    <CardB/>
    <CardB/>
    </div>
  </div>
}