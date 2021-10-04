import { shade } from 'polished';
import styled from 'styled-components';
import img from '../../assets/background.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;

  background-image: url(${img});
  height: 100vh;
`;

export const Content = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  padding: 32px;

  min-height: 100vh;

  position: absolute;
  z-index: 50;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;

  img {
    display: flex;
    width: 150px;
    margin-bottom: 54px;
  }

  h1 {
    color: var(--title);
    margin-bottom: 24px;
    font-size: 54px;
    line-height: 64px;
  }
`;

export const ContentForm = styled.div`
  width: 100%;
  max-width: 480px;
  background: var(--shape);
  border-radius: 5px;

  padding: 60px;

  form {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    a {
      width: 100%;
    }
  }

  p {
    margin-top: 48px;

    text-align: center;

    color: var(--title);
    font-family: Roboto;
    font-weight: 600;

    span {
      cursor: pointer;
      color: #ff9000;

      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }
    }
  }
`;
