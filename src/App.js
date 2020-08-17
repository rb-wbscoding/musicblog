import React, { useState, useEffect } from "react";
import "./App.css";
import * as Contentful from "contentful";
import marked from "marked";

const client = Contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "recipies",
      })
      .then((response) => {
        console.log(response);
        setEntries(response.items);
      });
  }, []);
  //const postDescription = marked(entry.fields.description)
  //<section dangerouslySetInnerHTML={{ __html: postDescription }} />
  const Entries = entries.map((entry) => (
    <div className="entry" key={entry.sys.id}>
      <h1>{entry.fields.name}</h1>
      <img src={entry.fields.feature.fields.file.url} alt="" />
      <section
        dangerouslySetInnerHTML={{ __html: marked(entry.fields.description) }}
      />
    </div>
  ));

  return <div className="App">{Entries}</div>;
}

export default App;
