import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Section from 'components/Section';
import TrendingMediaList from 'components/TrendingMediaList';

type movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type tvShow = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

const TrendingMedia = (): JSX.Element => {
  const [trendingList, setTrendingList] = useState<(movie | tvShow)[] | null>(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then(({ data: { results } }) => {
        const list = results?.filter((media: movie | tvShow) => media.poster_path);
        setTrendingList(list);
      });
  }, []);

  return (
    <Section title="Cinema Originals">
      <TrendingMediaList trendingList={trendingList} />
    </Section>
  );
};

export default TrendingMedia;
