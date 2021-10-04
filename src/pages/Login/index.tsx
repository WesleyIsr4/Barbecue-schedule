import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import Logo from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Container, Content, ContentForm, ContentInfo } from './styles';

import { Button } from '../../components/Button';

export const Login = (): JSX.Element => {
  function handleSubmit() {
    console.log('Login');
  }

  return (
    <Container>
      <Content>
        <ContentInfo>
          <img src={Logo} alt="Logo da Trinca" />
          <h1>Faça seu login na plataforma</h1>
        </ContentInfo>
        <ContentForm>
          <Form onSubmit={handleSubmit}>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              placeholder="Password"
              type="password"
            />
            <Link to="/home">
              <Button>Entrar</Button>
            </Link>
          </Form>
          <p>
            Não tem uma conta? <span>Criar uma conta</span>
          </p>
        </ContentForm>
      </Content>
    </Container>
  );
};
