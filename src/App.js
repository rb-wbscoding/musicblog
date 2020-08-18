import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import * as Contentful from "contentful";
import marked from "marked";
import { StateContext } from "./components/statecontext/stateContext";


function App() {
  const {entries}=useContext(StateContext);

  //const postDescription = marked(entry.fields.description)
  //<section dangerouslySetInnerHTML={{ __html: postDescription }} />
  const Entries = entries.map((entry) => (
    <div className="entry" key={entry.sys.id}>
      <h1>{entry.fields.title}</h1>
      <img src={entry.fields.image.fields.file.url} alt="" />
      <section
        className="description"
        dangerouslySetInnerHTML={{ __html: marked(entry.fields.description) }}
      />
    </div>
  ));

  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="head"></div>
        </header>
        <main>
          <div className="mainwrapper">{Entries}</div>
        </main>
      </div>
    </div>
  );
}

export default App;