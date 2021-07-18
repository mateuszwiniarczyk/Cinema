import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 1.5rem 1.8rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.grey};
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  box-shadow: none;
  border: 0;
`;

export default Input;
