import styled from 'styled-components';

export const Wrapper = styled.button`
  /* Custom CSS for button if needed */
  width: 100%; /* Full-width for block level */
  margin: 10px 0;
  padding: 10px 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray11};
  z-index: 1;

  &.btn-block {
    display: block;
    text-align: center;
  }
`;
