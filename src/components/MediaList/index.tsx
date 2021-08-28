import Alert from 'components/Alert';
import Button from 'components/Button';
import Loader from 'components/Loader';
import MediaBox from 'components/MediaBox';
import useSearch from 'hooks/useSearch';

import { List, Wrapper } from './index.styles';

const MediaList = (): JSX.Element => {
  const { mediaType, media, isLoading, isError, currentPage, totalPages, setCurrentPage } =
    useSearch();

  const handlePagination = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (isError) return <Alert type="error" text={isError} />;

  return (
    <Wrapper>
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
      {currentPage < totalPages && !isLoading ? (
        <Button type="button" disabled={isLoading} onClick={handlePagination}>
          Load more
        </Button>
      ) : null}
      {isLoading ? <Loader /> : null}
    </Wrapper>
  );
};

export default MediaList;
