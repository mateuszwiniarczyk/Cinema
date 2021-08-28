import Button from 'components/Button';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${Button} {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5rem;
  margin-bottom: 5rem;
  justify-content: center;
  align-items: flex-start;
`;
