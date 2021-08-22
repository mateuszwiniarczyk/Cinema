import { rest } from 'msw';
import { matchingMedia } from 'mocks/data/matchingMedia';
import { TrendingMovie, TrendingTvShow } from 'types/media';

export const mutliSearch = [
  rest.get(`https://api.themoviedb.org/3/search/multi`, (req, res, ctx) => {
    const params = req.url.searchParams;
    const query = params.get('query');

    let results: (TrendingTvShow | TrendingMovie)[] | [];

    if (query) {
      results = matchingMedia.filter((item) => {
        const title = 'title' in item ? item.title : item.name;
        return title.includes(query);
      });
    } else {
      return res(ctx.json({ errors: ['query must be provided'] }));
    }

    return res(
      ctx.json({
        page: 1,
        results
      })
    );
  })
];
