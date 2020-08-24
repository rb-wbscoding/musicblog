import React, {useContext} from "react";
import Styles from "./Box.module.css"
import { StateContext } from "../statecontext/stateContext";

function Box(){
    const { filteredEntries, setOneEntry} = useContext(StateContext)


return(
    <div className={Styles.container} >
        <p className={Styles.choice}>
            {filteredEntries.map((entry, id)=><span className={Styles.label} key={id} onClick={()=>setOneEntry([entry])}>{" "}{entry.fields.title}{" "}</span>)}
            
            </p>
        <div className={Styles.box}><img src={require("../../assets/record3.jpg")} alt="record"/></div>
        

    </div>

)

}

export default Box