import React from 'react';
import About from '../ABOUT/index'
import Profile from '../PROFILE/index'
import Portfolio from '../PORTFOLIO/index'
import Footer from '../FOOTER/index'
import SocilaMedia from '../SOCIALMEDIA/index'
import Work from '../WORK/index'
import Description from '../DESCRIPTION/index'
 const Home=()=> {
  return (
    <div >
      <Work />
      <Description />
      <Portfolio />
     <Profile />
     <About />
     <SocilaMedia />
     <Footer />
    </div>
  );
}

export default Home;
