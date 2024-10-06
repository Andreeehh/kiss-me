// src/pages/Home/styles.ts
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: ${({ theme }) => theme.spacings.small};
  box-sizing: border-box;
  background: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.colors.primary}, ${theme.colors.primaryLight})`};
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacings.small};
  width: 100%;
  max-width: 600px;
  margin-top: ${({ theme }) => theme.spacings.medium};
`;

export const InputWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacings.medium};
  width: 100%; /* O campo de input ocupa toda a largura */
  max-width: 400px; /* Limite de largura do campo */
`;

export const SendButton = styled.button`
  background: transparent; /* Botão transparente */
  border: none; /* Remove a borda */
  cursor: pointer; /* Cursor de pointer para indicar que é clicável */
  color: ${({ theme }) => theme.colors.secondary}; /* Cor do ícone */

  &:hover {
    color: ${({ theme }) =>
      theme.colors.primary}; /* Altera a cor ao passar o mouse */
  }
`;
