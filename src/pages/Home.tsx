import React from 'react';
import Navigation from 'components/Navigation';
import Hero from 'components/Hero';
import PopularMovies from 'components/PopularMovies';
import PopularTvShows from 'components/PopularTvShows';

const Home = (): JSX.Element => (
  <>
    <Navigation />
    <Hero />
    <PopularMovies />
    <PopularTvShows />
  </>
);

export default Home;
