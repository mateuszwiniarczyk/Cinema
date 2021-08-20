import styled from 'styled-components';

type WrapperProps = {
  readonly type: 'error';
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ type, theme }) => {
    switch (type) {
      case 'error':
        return `
            background-color: ${theme.colors.error};
            color: ${theme.colors.white};
        `;
        break;
      default:
        return `
            background-color: transparent;
            color: ${theme.colors.black};
        `;
    }
  }}

  position: relative;
  padding: 2rem;
  border-radius: 0.5rem;
  z-index: 2;
`;

export const Heading = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
