import React from "react";
import "./App.css";
import Header from './components/header/Header'
import SocialMedia from './components/socialmedia/SocialMedia'
import BlogCard from './components/blogcard/BlogCard'
import Filter from './components/filter/Filter'


function App() {
 
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Filter />
        <div className="mainwrapper">
        <BlogCard />
        </div>
        
       
      </div>
      <div className="secondContainer">
        <div className="socialMedia">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default App;
