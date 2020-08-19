import React, { useContext } from "react";
import "./App.css";
import marked from "marked";
import SocialMedia from "./components/SocialMedia";
import Arrow from "./components/Arrow";
import { StateContext } from "./components/statecontext/stateContext";

function App() {
  const { entries } = useContext(StateContext);

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
      <p>{entry.fields.yt}</p>
    </div>
  ));

  return (
    <div className="App">
      <div className="container">
        <main>
          <div className="mainwrapper">{Entries}</div>
        </main>
      </div>
      <div className="secondContainer">
        <h1>MUSIC BLOG</h1>
        <p>
          This blog was created for music lovers. New albums coming everyday.
          Don't miss them. You can find a collection of outstanding albums from
          various genres. Stay tuned!!!{" "}
        </p>
        <p>Don't hesitate to checkout our social media and YouTube channel.</p>
        <div className="arrowcont">
          <Arrow />
        </div>
        <div className="socialMedia">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default App;
