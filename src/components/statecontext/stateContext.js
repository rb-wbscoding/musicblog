import React, { createContext, useState, useEffect } from "react";
import * as Contentful from "contentful";

export const StateContext = createContext({});

export default function StateContextProvider({ children }) {
    const client = Contentful.createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
      });

    const [entries, setEntries] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "music",
      })
      .then((response) => {
        console.log(response);
        setEntries(response.items);
      });
  }, []);
    
    
    



    return (
        <StateContext.Provider
          value={{entries }}
          >
            {children}
          </StateContext.Provider>
        );
      }