export type Override<T1, T2> = Omit<T1, keyof T2> & T2;

interface BaseMedia {
  id: number;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  poster_path: string | null;
  genre_ids: number[];
  overview: string;
}

interface BaseMovie {
  adult: boolean;
  original_language: string;
  original_title: string;
  popularity: number;
  release_date: string;
  title: string;
  video: boolean;
}

interface BaseTvShow {
  first_air_date: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
}

export interface TrendingMovie extends BaseMedia, BaseMovie {
  media_type: string;
}

export interface PopularMovie extends BaseMedia, BaseMovie {}

export interface TrendingTvShow extends BaseMedia, BaseTvShow {
  media_type: string;
}

export interface PopularTvShow extends BaseMedia, BaseTvShow {
  popularity: number;
}

interface MediaImages {
  backdrop_path: string;
  poster_path: string;
}

export type FilteredPopularMovie = Override<PopularMovie, MediaImages>;

export type FilteredPopularTvShow = Override<PopularTvShow, MediaImages>;

export type FilteredTrendingMovie = Override<TrendingMovie, MediaImages>;

export type FilteredTrendingTvShow = Override<TrendingTvShow, MediaImages>;
