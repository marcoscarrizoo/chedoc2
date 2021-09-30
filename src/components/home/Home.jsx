import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import './home.css'

const Home = () => {
  return (
    <div>
      <div className='home-title'>
     <h1>Popular Titles</h1>

      </div>
       <main className='main-content'>
        <section className='section'>
            <Link className='link' to="/movies">
          <div className='card'>
              MOVIES
          </div>
            </Link>

            <Link className='link' to="/series">
          <div className='card'>
              SERIES
          </div>
            </Link>
        </section>
      </main> 

     <Footer/>
    </div>
  );
};

export default Home;
