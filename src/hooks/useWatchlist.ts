import { useEffect, useState } from 'react';
import { WatchlistMedia } from 'types/media';
import storage from 'utils/storage';

interface ReturnedData {
  watchlist: {
    [key: string]: WatchlistMedia | never;
  };
  mediaExists: boolean;
  addItem: () => void;
  removeItem: () => void;
}

interface Watchlist {
  [key: string]: WatchlistMedia | never;
}

const useWatchlist = (id?: string, data?: WatchlistMedia): ReturnedData => {
  const [watchlist, setWatchlist] = useState<Watchlist>({});
  const [mediaExists, setMediaExists] = useState(false);

  useEffect(() => {
    const watchlist = storage.getItem('watchlist');
    watchlist && setWatchlist(watchlist);

    if (id && watchlist && watchlist[id]) {
      setMediaExists(true);
    }
  }, [id]);

  const addItem = () => {
    if (id && data) {
      watchlist[id] = data;
    }
    storage.setItem('watchlist', watchlist);
    setWatchlist(watchlist);
    setMediaExists(true);
  };

  const removeItem = () => {
    if (id && watchlist[id]) {
      delete watchlist[id];
    }
    storage.setItem('watchlist', watchlist);
    setWatchlist(watchlist);
    setMediaExists(false);
  };

  return { watchlist, mediaExists, addItem, removeItem };
};

export default useWatchlist;
