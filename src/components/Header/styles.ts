import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0px 30px;
  background: rgb(32, 32, 36);
  transition: all 0.5s ease-in-out 0s;
  box-shadow: rgb(18 18 20) 0px 1rem 2rem;
  opacity: 1;
  transform: translateY(0px);
  visibility: visible;

  img {
    width: 192px;
    height: 56px;
    fill: none;
  }
`;
