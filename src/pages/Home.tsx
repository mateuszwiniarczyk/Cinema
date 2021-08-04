import React from 'react';
import Navigation from 'components/Navigation';
import Hero from 'components/Hero';
import SliderSection from 'components/SliderSection';

const Home = (): JSX.Element => (
  <>
    <Navigation />
    <Hero />
    <SliderSection title="Popular Movies" mediaType="movie" category="popular" />
    <SliderSection title="Popular Tv Shows" mediaType="tv" category="popular" />
  </>
);

export default Home;
