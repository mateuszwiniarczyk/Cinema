import { useEffect, useState } from 'react';
import storage from 'utils/storage';

interface Media {
  id: string;
  image: string;
  title: string;
  type: string;
}

interface ReturnedData {
  watchlist: {
    [key: string]: Media | never;
  };
  mediaExists: boolean;
  addItem: () => void;
  removeItem: () => void;
}

interface Watchlist {
  [key: string]: Media | never;
}

const useWatchlist = (id: string, data: Media): ReturnedData => {
  const [watchlist, setWatchlist] = useState<Watchlist>({});
  const [mediaExists, setMediaExists] = useState(false);

  useEffect(() => {
    const watchlist = storage.getItem('watchlist');
    watchlist && setWatchlist(watchlist);

    if (watchlist && watchlist[id]) {
      setMediaExists(true);
    }
  }, [id]);

  const addItem = () => {
    watchlist[id] = data;
    storage.setItem('watchlist', watchlist);
    setWatchlist(watchlist);
    setMediaExists(true);
  };

  const removeItem = () => {
    if (watchlist[id]) {
      delete watchlist[id];
    }
    storage.setItem('watchlist', watchlist);
    setWatchlist(watchlist);
    setMediaExists(false);
  };

  return { watchlist, mediaExists, addItem, removeItem };
};

export default useWatchlist;
