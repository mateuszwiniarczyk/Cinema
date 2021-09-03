import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import axios from 'axios';
import Alert from 'components/Alert';
import Loader from 'components/Loader';
import { useCombobox, UseComboboxStateChange } from 'downshift';
import debounce from 'lodash.debounce';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TrendingMovie, TrendingTvShow } from 'types/media';

import {
  ImageWrapper,
  SearchBtn,
  SearchInput,
  SearchResults,
  SearchResultsItem,
  Title,
  Wrapper
} from './index.styles';

const itemToString = (item: TrendingTvShow | TrendingMovie | null) => {
  if (item) {
    const title = 'name' in item ? item.name : item?.title;

    return title;
  }

  return '';
};

const SearchBox = (): JSX.Element => {
  const history = useHistory();
  const [matchingMedia, setMatchingMedia] = useState<(TrendingTvShow | TrendingMovie)[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMounted = useRef(false);

  const getMatchingMedia = debounce(
    ({ inputValue }: UseComboboxStateChange<TrendingTvShow | TrendingMovie>) => {
      (async () => {
        if (!inputValue) return;
        setIsLoading(true);
        try {
          const {
            data: { results }
          } = await axios.get(
            `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${inputValue}&page=1`
          );

          const media = results.filter(
            (item: TrendingTvShow | TrendingMovie) =>
              item.media_type !== 'person' && item.poster_path
          );

          if (isMounted.current) {
            setMatchingMedia(media);
            setIsLoading(false);
          }
        } catch (error) {
          setIsLoading(false);
          setIsError(error.message);
        }
      })();
    },
    500
  );

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } =
    useCombobox({
      items: matchingMedia,
      itemToString,
      onInputValueChange: getMatchingMedia,
      onSelectedItemChange: ({ selectedItem }) => {
        if (selectedItem) {
          history.push(`/media/${selectedItem.media_type}/${selectedItem.id}`);
        }
      }
    });

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Wrapper {...getComboboxProps()}>
      <SearchBtn type="button" onClick={() => setIsSearchOpen(!isSearchOpen)}>
        {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
      </SearchBtn>
      <SearchInput
        type="text"
        placeholder="Type to Search..."
        {...getInputProps()}
        isSearchOpen={isSearchOpen}
      />
      <SearchResults {...getMenuProps()}>
        {isError ? (
          <Alert type="error" text={isError} />
        ) : (
          isOpen &&
          (isLoading ? (
            <Loader />
          ) : matchingMedia.length ? (
            matchingMedia.map((item: TrendingTvShow | TrendingMovie, index: number) => {
              const title = 'title' in item ? item.title : item.name;

              return (
                <SearchResultsItem
                  key={item.id}
                  {...getItemProps({ item, index })}
                  highlighted={highlightedIndex === index}>
                  <ImageWrapper>
                    <img src={`https://image.tmdb.org/t/p/w45/${item.poster_path}`} alt={title} />
                  </ImageWrapper>
                  <Title>{title}</Title>
                </SearchResultsItem>
              );
            })
          ) : (
            <SearchResultsItem>No data</SearchResultsItem>
          ))
        )}
      </SearchResults>
    </Wrapper>
  );
};

export default SearchBox;
