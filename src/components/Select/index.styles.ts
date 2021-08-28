import styled from 'styled-components';

type ListItemProps = {
  highlighted: boolean;
};

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 20rem;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.black};
  border: none;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.white};
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const List = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 20rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.black};
  overflow-y: auto;

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

export const ListItem = styled.li<ListItemProps>`
  padding: 1.5rem 2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, highlighted }) =>
    highlighted ? theme.colors.grey : 'transparent'};
  cursor: pointer;
`;
