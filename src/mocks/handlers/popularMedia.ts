import { popularMovies } from 'mocks/data/popularMovies';
import { popularTvShows } from 'mocks/data/popularTvShows';
import { rest } from 'msw';
import { PopularMovie, PopularTvShow } from 'types/media';
import { MEDIA_TYPES } from 'utils/constants/mediaTypes';

export const popularMedia = [
  rest.get(`https://api.themoviedb.org/3/:type/popular`, (req, res, ctx) => {
    const query = req.params;
    const type = query.type;
    let results: (PopularMovie | PopularTvShow)[] | [];

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
