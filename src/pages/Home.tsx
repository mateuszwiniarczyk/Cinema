import React from 'react';
import Navigation from 'components/Navigation';
import Hero from 'components/Hero';
import PopularMovies from 'components/PopularMovies';
import PopularTvShows from 'components/PopularTvShows';
import TrendingMedia from 'components/TrendingMedia';

const Home = (): JSX.Element => (
  <>
    <Navigation />
    <Hero />
    <PopularMovies />
    <TrendingMedia />
    <PopularTvShows />
  </>
);

export default Home;
