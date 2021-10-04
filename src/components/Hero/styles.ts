import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 3.2rem;
  background: linear-gradient(to left, rgb(82, 56, 39, 1), rgb(32, 32, 36));
  border-radius: 5px;
  transition: box-shadow 0.1s ease-out 0s;

  div {
    h3 {
      color: var(--title);
      margin-bottom: 0.4rem;
    }
    span {
      font-size: 1rem;
      color: var(--subtitle);
      font-family: Roboto;
    }
  }
`;

export const CreateChurras = styled.button`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: center;

  background-color: transparent;
  border: none;

  cursor: pointer;

  span:first-child {
    color: #fff;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }

  img {
    width: 40px;
    height: 40px;
    margin-left: 8px;
  }
`;
