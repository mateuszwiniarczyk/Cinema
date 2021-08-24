import styled from 'styled-components';

type SearchResultsProps = {
  readonly highlighted?: boolean;
};

type SearchInputProps = {
  readonly isSearchOpen: boolean;
};

export const Wrapper = styled.div`
  display: none;
  position: relative;
  margin-left: auto;

  ${({ theme }) => theme.mq.lg} {
    display: block;
  }
`;

export const SearchResults = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 50rem;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.black};

  &::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.colors.black};
    width: 1.6rem;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.black};
  }

  &::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 1.6rem;
    border: 0.4rem solid ${({ theme }) => theme.colors.black};
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  height: 4.5rem;
  flex-basis: 4.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.span`
  display: -webkit-box;
  margin-left: 0.5rem;
  font-size: 1.4rem;
  line-height: 1.5;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`;

export const SearchInput = styled.input<SearchInputProps>`
  height: 5rem;
  width: 5rem;
  padding: 1rem 4rem 1rem 1rem;
  border-style: none;
  border-radius: 2.5rem;
  border-bottom: 0.1rem solid transparent;
  font-size: 1.4rem;
  font-weight: 400;
  outline: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ isSearchOpen, theme }) =>
    isSearchOpen
      ? `
    width: 25rem;
    border-radius: 0;
    background-color: transparent;
    border-color: ${theme.colors.white};
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
    `
      : null}
`;

export const SearchBtn = styled.button`
  width: 5rem;
  height: 5rem;
  border-style: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  pointer-events: painted;

  svg {
    width: 2rem;
    height: 2rem;
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const SearchResultsItem = styled.li<SearchResultsProps>`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, highlighted }) =>
    highlighted ? 'rgba(0,0,0, 0.7)' : theme.colors.black};
  cursor: pointer;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  a {
    display: block;
  }
`;
