import * as Styled from './styles';
import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  label?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  label = 'Button',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <Styled.Wrapper className={`btn btn-${variant} btn-block`} {...props}>
      {label}
    </Styled.Wrapper>
  );
};
