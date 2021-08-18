import { rest } from 'msw';
import matchingMedia from 'mocks/data/matchingMedia';

type movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  media_type: string;
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
  media_type: string;
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

export const mutliSearch = [
  rest.get(`https://api.themoviedb.org/3/search/multi`, (req, res, ctx) => {
    const params = req.url.searchParams;
    const query = params.get('query');

    let results: (tvShow | movie)[] | [];

    if (query) {
      results = matchingMedia.filter((item) => {
        const title = 'title' in item ? item.title : item.name;
        return title.includes(query);
      });
    } else {
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
