import React, {useContext, useState, useEffect} from "react";
import Styles from "./Filter.module.css"
import { StateContext } from "../statecontext/stateContext";



function Filter(){
  const { entries, setFilteredEntries } = useContext(StateContext);
 
  const [search, setSearch] = useState("");
  
  

useEffect(()=>{
   if(search===""){
    setFilteredEntries(entries)
  }else{
    
setFilteredEntries(
  entries.filter(entry =>{return entry.fields.title.toLowerCase().includes(search.toLowerCase())})  
  )}
 

  },[search, entries])
 
  


return(

        <div className={Styles.searchbar}>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
           />


        </div>)
         

}

export default Filter;
