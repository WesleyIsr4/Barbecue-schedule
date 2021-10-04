import { ButtonHTMLAttributes } from 'react';
import React from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export const Button = ({ loading, children }: ButtonProps): JSX.Element => {
  return <Container>{loading ? 'Carregando...' : children}</Container>;
};
