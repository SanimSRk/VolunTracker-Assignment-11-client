import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import NeedVolunters from './needVolunter/NeedVolunters';
import About from '../About/About';
import ExtaSection from './ExtaSection/ExtaSection';

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <NeedVolunters></NeedVolunters>
      <ExtaSection></ExtaSection>
    </div>
  );
};

export default Home;
