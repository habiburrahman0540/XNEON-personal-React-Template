import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import About from '../components/About';
import Services from "../components/Service";
import Project from "../components/Projects";
import Counter from "../components/CounterSection";
import Timeline from "../components/TimeLine";
import Clients from "../components/Clients"
import Price from '../components/Price';
const HomePage = () => {
    return (
        <div>
             <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Project/>
      <Counter/>
      <Timeline/>
      <Clients/>
      <Price/>
        </div>
    );
};

export default HomePage;