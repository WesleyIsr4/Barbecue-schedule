import styled from 'styled-components';

export const Container = styled.div`
  width: 282px;
  height: 192px;

  background-color: #0f0f13;
  padding: 24px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  cursor: pointer;
`;

export const Header = styled.header`
  h2 {
    color: var(--title);
    margin-bottom: 0.2rem;
  }

  p {
    color: var(--subtitle);
    font-family: Roboto;
    font-weight: 600;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  img {
    margin-right: 0.4rem;
  }

  span {
    color: var(--subtitle);
    font-family: Roboto;
    font-weight: 600;
  }
`;
