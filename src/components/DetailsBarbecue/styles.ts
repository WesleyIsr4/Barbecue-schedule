import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  gap: 2rem;

  header {
    width: 100%;
    color: var(--title);
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  p {
    font-weight: 500;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;

  margin-top: 1.4rem;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
  border-radius: 0.4rem;
  background-color: var(--shape);

  p {
    color: var(--subtitle);
    font-weight: 500;

    span {
      font-size: 1.2rem;
      margin-left: 0.4rem;
    }
  }
`;

export const InfoBarbecue = styled.div`
  margin-top: 1.2rem;
`;

export const Content = styled.div`
  width: 100%;
`;
