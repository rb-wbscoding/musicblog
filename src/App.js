
import React from "react";
import "./App.css";
import SocialMedia from './components/socialmedia/SocialMedia'
import BlogCard from './components/blogcard/BlogCard'
import Filter from './components/filter/Filter'
import Box from "./components/box/Box"
import Rater from "./components/rater/Rater"


function App() {

 
  return (
    <div className="App">
      <div className="container">
        <Filter />
        <div className="mainwrapper">
        <BlogCard />
        <Box />
        </div>

      </div>
     
      <div className="secondContainer">
        <h1>MUSIC BLOG</h1>
        <p>
          This blog was created for music lovers. New albums coming everyday.
          Don't miss them. You can find a collection of outstanding albums from
          various genres. Stay tuned!!!{" "}
        </p>
        <p className="hidden">
          Don't hesitate to checkout our social media and YouTube channel.
        </p>
        <div className="socialMedia">
          <SocialMedia className="ikonki" />
          <Rater />
        </div>
      </div>
    </div>
  );
}

export default App;
