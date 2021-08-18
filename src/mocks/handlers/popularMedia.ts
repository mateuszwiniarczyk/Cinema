import { rest } from 'msw';
import popularMovies from 'mocks/data/popularMovies';
import popularTvShows from 'mocks/data/popularTvShows';
import MEDIA_TYPES from 'data/mediaTypes';

type movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type tvShow = {
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
};

export const popularMedia = [
  rest.get(`https://api.themoviedb.org/3/:type/popular`, (req, res, ctx) => {
    const query = req.params;
    const type = query.type;
    let results: (movie | tvShow)[] | [];

    switch (type) {
      case MEDIA_TYPES.MOVIE:
        results = popularMovies;
        break;
      case MEDIA_TYPES.TV:
        results = popularTvShows;
        break;
      default:
        results = [];
    }

    return res(
      ctx.json({
        page: 1,
        results
      })
    );
  })
];
