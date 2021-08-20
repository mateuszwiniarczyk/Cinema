import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useCombobox, UseComboboxStateChange } from 'downshift';
import debounce from 'lodash.debounce';
import axios from 'axios';
import {
  ImageWrapper,
  Title,
  SearchBtn,
  SearchInput,
  SearchResults,
  SearchResultsItem,
  Wrapper
} from './index.styles';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import Loader from 'components/Loader';
import Alert from 'components/Alert';

type movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type tvShow = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

const SearchBox = (): JSX.Element => {
  const history = useHistory();
  const [matchingMedia, setMatchingMedia] = useState<(tvShow | movie)[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMounted = useRef(false);

  const getMatchingMedia = debounce(({ inputValue }: UseComboboxStateChange<tvShow | movie>) => {
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
          (item: tvShow | movie) => item.media_type !== 'person' && item.poster_path
        );

        isMounted.current && setMatchingMedia(media);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(error.message);
      }
    })();
  }, 500);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } =
    useCombobox({
      items: matchingMedia,
      onInputValueChange: getMatchingMedia,
      onSelectedItemChange: ({ selectedItem }) => {
        if (selectedItem) {
          history.push(`/${selectedItem.media_type}/${selectedItem.id}`);
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
            matchingMedia.map((item: tvShow | movie, index: number) => {
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
