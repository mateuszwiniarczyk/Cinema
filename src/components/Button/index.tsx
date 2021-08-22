import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  border: none;
  border-radius: 0.5rem;
  text-decoration: none;
  outline: none;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  padding: 1.8rem 2.3rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  background-color: ${({ theme, color }) => {
    switch (color) {
      case 'grey':
        return theme.colors.grey;
      default:
        return theme.colors.red;
    }
  }};
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.85;
  }
`;

export default Button;
