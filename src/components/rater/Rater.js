import React, {useContext, useState, useEffect} from "react";
import Styles from "./Rater.module.css"
import { StateContext } from "../statecontext/stateContext";

function Rater(){
    const{oneEntry, rateShow, setRateShow} = useContext(StateContext)
    const[rating, setRating]=useState(0)
    const[votes, setVotes]=useState(0)
    const[rateVis, setRateVis]=useState(Styles.invis)

    useEffect(()=>{
    if(oneEntry[0]!==undefined){
    const val = oneEntry[0].fields.rating
    const numb = Math.trunc(val)
    const rat = 10*(val-numb).toFixed(1);
    setVotes(numb)
    setRating(rat)
}},   [oneEntry])

    useEffect(()=>{
    if(rateShow){setRateVis(Styles.holdall)
    }else{setTimeout(()=>setRateVis(Styles.invis), 5000)}},[rateShow])

    return(
        <div className={rateVis}>
        {  rating >= 1 && rating <= 5 ?(
        <div>
          <h3>RATED</h3>
              <div className={Styles.rater}>
                <h3 className={Styles.rated}>{Math.round(rating*10)/10}/5</h3>
                <div className={Styles.ratecont}>
                    <div className={Styles.rate} style={{"width": 100*(rating.toFixed(1))/5+"%"}}></div>
                    <div onClick={()=>{setRating(((rating*votes)+1)/(votes+1)); setVotes(votes+1); setRateShow(false)}} className={Styles.one}>1</div>
                    <div onClick={()=>{setRating(((rating*votes)+2)/(votes+1)); setVotes(votes+1); setRateShow(false)}} className={Styles.two}>2</div>
                    <div onClick={()=>{setRating(((rating*votes)+3)/(votes+1)); setVotes(votes+1); setRateShow(false)}} className={Styles.three}>3</div>
                    <div onClick={()=>{setRating(((rating*votes)+4)/(votes+1)); setVotes(votes+1); setRateShow(false)}} className={Styles.four}>4</div>
                    <div onClick={()=>{setRating(((rating*votes)+5)/(votes+1)); setVotes(votes+1); setRateShow(false)}} className={Styles.five}>5</div>
                </div>
        
                   
            </div>
            </div> ) : (<h3>""</h3>  )
         }

        </div>

        
     


    )
}

export default Rater