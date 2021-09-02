import Navigation from 'components/Navigation';
import WatchlistContent from 'components/WatchlistContent';
import React from 'react';

const Watchlist = (): JSX.Element => {
  return (
    <div>
      <Navigation />
      <WatchlistContent />
    </div>
  );
};

export default Watchlist;
