import { MediaTypes, TrendingMovie, TrendingTvShow } from 'types';

const matchingMedia: (TrendingMovie | TrendingTvShow)[] = [
  {
    adult: false,
    backdrop_path: '/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg',
    genre_ids: [28, 12, 14, 35],
    id: 436969,
    original_language: 'en',
    original_title: 'The Suicide Squad',
    media_type: MediaTypes.Movie,
    overview:
      'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
    popularity: 9101.854,
    poster_path: '/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg',
    release_date: '2021-07-28',
    title: 'The Suicide Squad',
    video: false,
    vote_average: 8.1,
    vote_count: 2286
  },

  {
    adult: false,
    backdrop_path: '/7WJjFviFBffEJvkAms4uWwbcVUk.jpg',
    genre_ids: [12, 14, 35, 28],
    id: 451048,
    original_language: 'en',
    original_title: 'Jungle Cruise',
    media_type: MediaTypes.Movie,
    overview:
      'Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.',
    popularity: 7760.301,
    poster_path: '/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
    release_date: '2021-07-28',
    title: 'Jungle Cruise',
    video: false,
    vote_average: 8,
    vote_count: 1699
  },
  {
    backdrop_path: null,
    first_air_date: '2013-09-13',
    genre_ids: [10764],
    id: 81799,
    name: 'Promi Big Brother',
    origin_country: ['DE'],
    original_language: 'de',
    original_name: 'Promi Big Brother',
    media_type: MediaTypes.Tv,
    overview: '',
    popularity: 1668.127,
    poster_path: null,
    vote_average: 8,
    vote_count: 1
  },
  {
    backdrop_path: '/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg',
    first_air_date: '2021-08-11',
    genre_ids: [16, 10759, 10765],
    id: 91363,
    name: 'What If...?',
    origin_country: ['US'],
    original_language: 'en',
    original_name: 'What If...?',
    media_type: MediaTypes.Tv,
    overview:
      'Taking inspiration from the comic books of the same name, each episode explores a pivotal moment from the Marvel Cinematic Universe and turns it on its head, leading the audience into uncharted territory.',
    popularity: 1372.582,
    poster_path: '/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg',
    vote_average: 8.6,
    vote_count: 447
  }
];

export default matchingMedia;
