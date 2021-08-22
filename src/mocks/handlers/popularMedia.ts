import { rest } from 'msw';
import { popularMovies } from 'mocks/data/popularMovies';
import { popularTvShows } from 'mocks/data/popularTvShows';
import { MediaTypes, PopularMovie, PopularTvShow } from 'types/media';

export const popularMedia = [
  rest.get(`https://api.themoviedb.org/3/:type/popular`, (req, res, ctx) => {
    const query = req.params;
    const type = query.type;
    let results: (PopularMovie | PopularTvShow)[] | [];

    switch (type) {
      case MediaTypes.Movie:
        results = popularMovies;
        break;
      case MediaTypes.Tv:
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
