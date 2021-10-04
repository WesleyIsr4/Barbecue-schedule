import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Container } from './styles';

export const Header = (): JSX.Element => {
  return (
    <Container>
      <img src={logoImg} alt="" />
    </Container>
  );
};
