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
  z-index: 1;
`;

export const InputWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacings.medium};
  width: 100%; /* O campo de input ocupa toda a largura */
  max-width: 400px; /* Limite de largura do campo */
  z-index: 1;
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
  z-index: 1;
`;

export const TopLeftImage = styled.img`
  position: absolute;
  z-index: 0;
  top: 25px; // Ajuste conforme necessário
  left: 35px;
  width: 150px; // Ajuste conforme necessário
  height: auto; // Mantém a proporção da imagem
  transform: rotate(45deg); // Angulação para o centro
  pointer-events: none; // Para que as imagens não interfiram nas interações
`;

export const TopRightImage = styled.img`
  position: absolute;
  z-index: 0;
  top: 25px; // Ajuste conforme necessário
  right: 35px;
  width: 150px; // Ajuste conforme necessário
  height: auto; // Mantém a proporção da imagem
  transform: rotate(-45deg); // Angulação para o centro
  pointer-events: none; // Para que as imagens não interfiram nas interações
`;

export const BottomLeftImage = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 35px; // Ajuste conforme necessário
  left: 35px;
  width: 150px; // Ajuste conforme necessário
  height: auto; // Mantém a proporção da imagem
  transform: rotate(45deg); // Angulação para o centro
  pointer-events: none; // Para que as imagens não interfiram nas interações
`;

export const BottomRightImage = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 35px; // Ajuste conforme necessário
  right: 35px;
  width: 150px; // Ajuste conforme necessário
  height: auto; // Mantém a proporção da imagem
  transform: rotate(-45deg); // Angulação para o centro
  pointer-events: none; // Para que as imagens não interfiram nas interações
`;

export const CenteredImage = styled.img`
position: absolute;
z-index: 0;
  margin-top: ${({ theme }) =>
    theme.spacings.large}; /* Espaço acima da imagem */
  width: 300px; /* Ajuste conforme necessário */
  height: auto; /* Mantém a proporção da imagem */
  display: block; /* Garante que a imagem esteja em bloco */
  margin-left: auto; /* Centraliza a imagem horizontalmente */
  margin-right: auto; /* Centraliza a imagem horizontalmente */
  pointer-events: none; // Para que a imagem não interfira nas interações
`;
