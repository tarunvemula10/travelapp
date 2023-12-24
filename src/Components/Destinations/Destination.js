import React from 'react';
import Carousel from './Carousel';
import Activities from './Activities';
import TopPicks from './TopPicks';
import OurList from './OurList';
import HomeEnding from '../Home/HomeEnding';

export default function Destination() {
     return (
     <>
     <Carousel/>
     <TopPicks/>
     <OurList/>
     <Activities/>
     <HomeEnding backgroundColor='bg-secondary-subtle'/>
     </>
  )
}
