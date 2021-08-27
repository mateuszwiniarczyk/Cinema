import Alert from 'components/Alert';
import Loader from 'components/Loader';
import MediaBox from 'components/MediaBox';
import useSearch from 'hooks/useSearch';

import { List } from './index.styles';

const MediaList = (): JSX.Element => {
  const { mediaType, media, isLoading, isError } = useSearch();

  if (isLoading) return <Loader />;

  if (isError) return <Alert type="error" text={isError} />;

  return (
    <List>
      {media.map((mediaItem) => {
        const { id, backdrop_path, genre_ids } = mediaItem;
        let title;

        if ('name' in mediaItem) {
          title = mediaItem.name;
        } else {
          title = mediaItem.title;
        }

        return (
          <MediaBox
            key={id}
            id={id}
            image={backdrop_path}
            name={title}
            genreId={genre_ids[0]}
            mediaType={mediaType}
          />
        );
      })}
    </List>
  );
};

export default MediaList;
