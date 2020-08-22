import React, {useContext, useState, useEffect, useRef} from "react";
import Styles from "./Blogcard.module.css"
import marked from "marked"
import YouTubePlayer from 'youtube-player';
import { StateContext } from "../statecontext/stateContext";

function BlogCard(){
    const [rotpost, setRotPost] = useState([])
    const {entries, filteredEntries, oneEntry, setRateShow}=useContext(StateContext);
    const [smith, setSmith] = useState(Styles.down)
    const [freeEntry, setFreeEntry]=useState([])
    const iFrame=useRef(null)
    //const player = new YT.Player('player')


    useEffect(()=>{
    const newRots = oneEntry.map(() => 0)
    setRotPost(newRots) 
    setRateShow(false)
    setSmith(Styles.down)
    setTimeout(()=>{
    setFreeEntry(oneEntry)
    setTimeout(()=> {
        
        
        if(iFrame.current!==null){
            
       
        const fish=YouTubePlayer('video-player')
        fish.playVideo()
       
       tryagain()
       
       function tryagain(){  
       setTimeout(()=>{ 
            
            fish.getCurrentTime().then((e)=>{if(e>120){setRateShow(true)
            //    fish.stopVideo()
            }else{tryagain()}})
            
        }, 10000)}
            
    }
      setSmith(Styles.entrycontainer)}, 200)   
    
    }, 400)

     
    
    }, [oneEntry])
    
      function Rotatenow(idi){
        
        const fish=document.getElementById(idi).classList
        const newRotPost = rotpost.map((rot, index) => {
            if (index === idi ) {
                if(rot===0){return 1}
                else if(rot===1){return 2}
                else {return 0}
            }
            return rot
        })
        setRotPost(newRotPost);
        if(rotpost[idi]===0){
            fish.remove(Styles.extra)
            fish.add(Styles.rotatright);
        } else if(rotpost[idi]===1){
            fish.remove(Styles.rotatright);
            fish.add(Styles.rotatleft);
        } else {
            fish.remove(Styles.rotatleft);
            fish.add(Styles.extra);
        }
    }
         
 
return(
    <div >
        {
            freeEntry.map((entry, id) =>{   
                return (           
                <div  className={smith} >
                    <div onClick={()=>Rotatenow(id)} className={Styles.entry} id={id} key={entry.sys.id}>
                        <div className={Styles.front}>
                            <h1>{entry.fields.title}</h1>
                            <img src={entry.fields.image.fields.file.url} alt="" /> 
                        </div>  
                        <div className={Styles.right}>
                            <section
                            className={Styles.description}
                            dangerouslySetInnerHTML={{ __html: marked(entry.fields.description)}}  
                        />  
                        </div>  
                        <div className={Styles.left}>
                        <section
                        className={Styles.iframe}
                            ref={iFrame}
                           dangerouslySetInnerHTML={{ __html: marked(entry.fields.yt)}}  
                       />  
                        <div ></div>
                        </div>             
                    </div>
                </div>
            )})
        }

    </div>
    
)

}

export default BlogCard;