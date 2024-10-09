// src/components/ImageButton/styles.ts
import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  width: 100%;
  max-width: 250px; /* Limite de largura do botão */
  z-index: 1;
  img {
    width: 100%;
    height: auto; /* Manter a proporção da imagem */
    border-radius: 8px; /* Arredondar bordas da imagem */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para a imagem */
  }

  span {
    margin-top: ${({ theme }) => theme.spacings.xxsmall};
    font-size: ${({ theme }) => theme.font.sizes.small};
    color: ${({ theme }) => theme.colors.deepBlack}; /* Cor do texto */
  }

  &:hover {
    opacity: 0.8; /* Efeito de hover */
  }
`;
