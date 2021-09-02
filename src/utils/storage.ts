import { WatchlistMedia } from 'types/media';

const storagePrefix = 'cinema_react_';

interface Watchlist {
  [key: string]: WatchlistMedia | never;
}

const storage = {
  getItem: (key: string): Watchlist | undefined => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}${key}`) as string);
  },
  setItem: (key: string, item: Watchlist): void => {
    window.localStorage.setItem(`${storagePrefix}${key}`, JSON.stringify(item));
  }
};

export default storage;
