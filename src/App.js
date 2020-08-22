
import React from "react";
import "./App.css";
import Header from './components/header/Header'
import SocialMedia from './components/socialmedia/SocialMedia'
import BlogCard from './components/blogcard/BlogCard'
import Filter from './components/filter/Filter'
import Arrow from "./components/arrow/Arrow";
import Box from "./components/box/Box"
import Rater from "./components/rater/Rater"


function App() {

 
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Filter />
        <div className="mainwrapper">
        <BlogCard />
        <Box />
        </div>
        <div className="phone">
         {/*<div className="ar"><Arrow /></div> */}
          <div className="so"><SocialMedia /></div>
        </div>

      </div>
      <div className="phone">
        {/*<div className="ar"><Arrow /></div>*/} 
        <div className="so"><SocialMedia />  </div>
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
        {/*<div className="arrowcont">
          <Arrow />
  </div>*/}
        <div className="socialMedia">
          <SocialMedia className="ikonki" />
          <Rater />
        </div>
      </div>
    </div>
  );
}

export default App;
