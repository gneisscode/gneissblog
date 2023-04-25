import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import Subscribe from "../components/Subscribe";
import Posts from "../components/Posts";
import "./home.css";
import Bio from "../components/Bio";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div className="home__wrapper">
      <Header />
      <Featured />
      <Subscribe />
      <div className="pb__cont">
        <div className="p__cont">
          <h1 className="p__title">GNEISSCODES</h1>
          <Posts />
          <button className="posts__btn">More Posts</button>
        </div>
        <div className="b__cont">
          <Bio />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
