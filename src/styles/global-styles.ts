// globalStyles.ts
import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap, se necessário

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
    background: ${({ theme }) =>
      `linear-gradient(to bottom right, ${theme.colors.primary}, ${theme.colors.primaryLight})`};
    color: ${({ theme }) => theme.colors.gray9};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.secondary};
    margin: ${({ theme }) => theme.spacings.large} 0;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
    color: ${({ theme }) => theme.colors.gray8};
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
    color: ${({ theme }) => theme.colors.gray7};
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};
    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.secondaryLight};
    }
  }

  /* Definição de botões */
  button {
    font-family: ${({ theme }) => theme.font.family.default};
    padding: ${({ theme }) => theme.spacings.small} ${({ theme }) =>
  theme.spacings.medium};
    border-radius: ${({ theme }) => theme.spacings.xxsmall};
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};

    /* Comportamento no estado de hover */
    &:hover {
      opacity: 0.8;
      box-shadow: 0 0 10px ${({ theme }) => theme.colors.primaryLight};
    }

    &.btn-primary {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.deepWhite};
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &.btn-secondary {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.deepWhite};
      border-color: ${({ theme }) => theme.colors.secondary};
    }

    &.btn-success {
      background-color: ${({ theme }) => theme.colors.success};
      color: ${({ theme }) => theme.colors.deepWhite};
      border-color: ${({ theme }) => theme.colors.success};
    }

    &.btn-info {
      background-color: ${({ theme }) => theme.colors.info};
      color: ${({ theme }) => theme.colors.deepWhite};
      border-color: ${({ theme }) => theme.colors.info};
    }

    &.btn-warning {
      background-color: ${({ theme }) => theme.colors.warning};
      color: ${({ theme }) => theme.colors.deepWhite};
      border-color: ${({ theme }) => theme.colors.warning};
    }

    /* Botão estilo bloco */
    &.btn-block {
      display: block;
      width: 100%;
    }
  }

  /* Estilo de tabelas */
  .table {
    width: 100%;
    overflow-y: auto;
    border-collapse: collapse;
    color: ${({ theme }) => theme.colors.gray9};
  }

  .table th,
  .table td {
    border: 1px solid ${({ theme }) => theme.colors.gray4};
    padding: ${({ theme }) => theme.spacings.small};
  }

  /* Inputs e forms */
  input, textarea {
    font-family: ${({ theme }) => theme.font.family.default};
    padding: ${({ theme }) => theme.spacings.small};
    border: 1px solid ${({ theme }) => theme.colors.gray3};
    border-radius: ${({ theme }) => theme.spacings.xxsmall};
    transition: ${({ theme }) => theme.transitions.fast};
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 5px ${({ theme }) => theme.colors.primaryLight};
    }
  }

  /* Container com padding e margens baseadas no theme */
  .container {
    padding: ${({ theme }) => theme.spacings.medium};
    margin: ${({ theme }) => theme.spacings.large} auto;
    max-width: ${({ theme }) => theme.frameSizes.max};
  }

  /* Estilo global para elementos que estejam dentro de headers */
  header {
    background-color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacings.medium};
    color: ${({ theme }) => theme.colors.deepWhite};
  }

  /* Estilo global para rodapé */
  footer {
    background-color: ${({ theme }) => theme.colors.gray10};
    padding: ${({ theme }) => theme.spacings.medium};
    color: ${({ theme }) => theme.colors.deepWhite};
  }
`;
