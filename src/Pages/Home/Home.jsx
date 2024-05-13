import React from 'react';
import Banner from './Banner/Banner';
import NeedVolunters from './needVolunter/NeedVolunters';
import About from '../About/About';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <NeedVolunters></NeedVolunters>
      <h2>This is Home Pages</h2>
    </div>
  );
};

export default Home;
