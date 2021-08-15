import React, { useState, useEffect, useRef } from 'react';
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
  const isMounted = useRef(false);

  const getMatchingMedia = debounce(({ inputValue }: UseComboboxStateChange<tvShow | movie>) => {
    if (!inputValue) return;

    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${inputValue}&page=1`
      )
      .then(({ data: { results } }) => {
        const media = results.filter(
          (item: tvShow | movie) => item.media_type !== 'person' && item.poster_path
        );
        isMounted.current && setMatchingMedia(media);
      });
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
      <SearchBtn type="button" className="btn-search">
        <SearchIcon />
      </SearchBtn>
      <SearchInput type="text" placeholder="Type to Search..." {...getInputProps()} />
      <SearchResults {...getMenuProps()}>
        {isOpen && matchingMedia.length
          ? matchingMedia.map((item: tvShow | movie, index: number) => {
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
          : null}
      </SearchResults>
    </Wrapper>
  );
};

export default SearchBox;
