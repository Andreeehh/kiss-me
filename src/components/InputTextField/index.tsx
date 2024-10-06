// src/components/InputTextField/index.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'; // Importando o ícone específico
import * as Styled from './styles';

interface InputTextFieldProps {
  placeholder: string;
  onSubmit: (value: string) => void;
}

const InputTextField: React.FC<InputTextFieldProps> = ({
  placeholder,
  onSubmit,
}) => {
  const [value, setValue] = React.useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSubmit(value);
      setValue('');
    }
  };

  return (
    <Styled.StyledInputGroup>
      <Styled.InputField
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Styled.SubmitButton onClick={() => onSubmit(value)}>
        <FontAwesomeIcon icon={faPaperPlane} /> {/* Usando o ícone aqui */}
      </Styled.SubmitButton>
    </Styled.StyledInputGroup>
  );
};

export default InputTextField;
