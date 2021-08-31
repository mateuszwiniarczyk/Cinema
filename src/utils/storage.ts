const storagePrefix = 'cinema_react_';

interface Media {
  id: string;
  image: string;
  title: string;
  type: string;
}

interface Watchlist {
  [key: string]: Media | never;
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
