import React, {useContext, useState, useEffect} from "react";
import Styles from "./Filter.module.css"
import marked from "marked"
import { StateContext } from "../statecontext/stateContext";



function Filter(){
  const { entries, setFilteredEntries } = useContext(StateContext);
 
  const [search, setSearch] = useState("");
  
  

useEffect(()=>{
  
    
setFilteredEntries(
  entries.filter(entry =>{return entry.fields.title.toLowerCase().includes(search.toLowerCase())})  
  )


  },[search])
 
  if(search===""){
    setFilteredEntries(entries)
  }


  //if (loading) {
    //return <p>Loading countries....</p>;
 // }

return(
         <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
           />)

}

export default Filter;
