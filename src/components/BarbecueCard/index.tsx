import { format } from 'date-fns';
import React, { useState } from 'react';
import groupIcon from '../../assets/group.svg';
import moneyIcon from '../../assets/money.svg';
import { useBarbecue } from '../../hooks/BarbecuesContext';
import { DetailsBarbecue } from '../DetailsBarbecue';
import { Container, Footer, Header } from './styles';

export const BarbecueCard = (): JSX.Element => {
  const { barbecues } = useBarbecue();

  const [currentOpenModal, setCurrenOpentModal] = useState(false);
  const [currentId, setCurrentId] = useState('');

  const handleCurrentOpenModal = (id: string) => {
    setCurrenOpentModal(true);
    setCurrentId(id);
  };

  const handleCurrentCloseModal = () => {
    setCurrenOpentModal(false);
  };

  const result = barbecues.map(item => {
    const totalValue = item.users.reduce((acc, value) => {
      acc += Number(value.value);
      return acc;
    }, 0);
    return totalValue;
  });

  return (
    <>
      {barbecues.map(barbecue => (
        <>
          <Container
            key={barbecue.id}
            onClick={() => handleCurrentOpenModal(barbecue.id)}
          >
            <Header>
              <h2>{format(new Date(barbecue.date), "dd'/'MM")}</h2>
              <p>{barbecue.reason}</p>
            </Header>
            <Footer>
              <div>
                <img src={groupIcon} alt="Icone que representa um grupo" />
                <span>{barbecue.users.length}</span>
              </div>
              <div>
                <img src={moneyIcon} alt="icone que representa uma moeda" />
                <span>R$ {result}</span>
              </div>
            </Footer>
          </Container>
          <DetailsBarbecue
            id={currentId}
            isOpen={currentOpenModal}
            onRequestClose={handleCurrentCloseModal}
          />
        </>
      ))}
    </>
  );
};
