import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; /* 100% da altura da janela */
  width: 100vw;  /* 100% da largura da janela */
  overflow-y: auto; /* Adiciona rolagem vertical */
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

export const Info = styled.div`
  display: flex; /* Mantém as informações na mesma linha */
  flex-direction: row; /* Alinha na horizontal */
  flex-wrap: nowrap; /* Não quebra as informações em várias linhas */
  p {
    margin: 0;
    font-size: 14px;
    margin-right: 15px; /* Espaço entre as informações */
  }
`;
