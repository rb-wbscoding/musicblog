import React, { createContext, useState, useEffect } from "react";
import * as Contentful from "contentful";

export const StateContext = createContext({});

export default function StateContextProvider({ children }) {
    

    const [entries, setEntries] = useState([]);
    const [filteredEntries ,setFilteredEntries]=useState([]);
    const [oneEntry, setOneEntry]=useState([]);

  useEffect(() => {
   const client = Contentful.createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
      }); 
    
    client
      .getEntries({
        content_type: "music",
      })
      .then((response) => {
        setEntries(response.items);
      });
  }, []);
    
    
    



    return (
        <StateContext.Provider
          value={{entries, filteredEntries ,setFilteredEntries, oneEntry, setOneEntry}}
          >
            {children}
          </StateContext.Provider>
        );
      }