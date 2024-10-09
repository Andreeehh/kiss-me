// src/components/InputTextField/styles.ts

import styled from 'styled-components';
import { InputGroup as BootstrapInputGroup } from 'react-bootstrap'; // Renomeando aqui

export const StyledInputGroup = styled(BootstrapInputGroup)`
  width: 100%;
  display: flex;
  z-index: 1;
`;

export const InputField = styled.input`
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 8px;
  display: flex;
  align-items: center;

  &:hover {
    color: #007bff; /* Altere a cor do ícone ao passar o mouse, se desejar */
  }

  i {
    font-size: 20px; /* Ajuste o tamanho do ícone */
  }
`;
