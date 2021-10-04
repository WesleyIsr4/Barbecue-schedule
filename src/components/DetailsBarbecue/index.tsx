import { format } from 'date-fns';
import { useMemo } from 'react';
import Modal from 'react-modal';
import React from 'react';
import { useBarbecue } from '../../hooks/BarbecuesContext';
import { AddPeople } from '../AddPeople';
import { People } from '../People';
import {
  Card,
  Cards,
  Container,
  Content,
  InfoBarbecue,
  InfoHeader,
} from './styles';

interface BarbecueModalProps {
  id: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

export const DetailsBarbecue = ({
  id,
  isOpen,
  onRequestClose,
}: BarbecueModalProps) => {
  const { barbecues } = useBarbecue();

  const SelectedBarbecue = useMemo(() => {
    return barbecues.filter(barbecue => {
      return barbecue.id === id;
    });
  }, [barbecues, id]);

  const result = barbecues.map(item => {
    const totalValue = item.users.reduce((acc, user) => {
      acc += Number(user.value);
      return acc;
    }, 0);
    return totalValue;
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      {SelectedBarbecue.map(barbecue => (
        <Container key={barbecue.id}>
          <header>
            <InfoHeader>
              <div className="infoHeader">
                <h2>{format(new Date(barbecue.date), "dd'/'MM")}</h2>
                <h1>{barbecue.reason}</h1>
              </div>
              <div>
                <p>Valor com bebida: R$ {barbecue.valueWithDrinkIncluded}</p>
                <p>Valor sem bebida: R$ {barbecue.valueWithoutDrink}</p>
              </div>
            </InfoHeader>

            <Cards>
              <Card>
                <p>
                  total de convidados:
                  <span>
                    {barbecue.users.length.toString().padStart(2, '0')}
                  </span>
                </p>
              </Card>
              <Card>
                <p>
                  total de arrecadado:
                  <span>R$ {result}</span>
                </p>
              </Card>
            </Cards>
            <InfoBarbecue>
              <h3>Descrição</h3>
              <p>{barbecue.description}</p>
            </InfoBarbecue>
            <InfoBarbecue>
              <h3>Observações</h3>
              <p>{barbecue.observation}</p>
            </InfoBarbecue>
          </header>

          <Content>
            <AddPeople id={barbecue.id} />
            <People data={barbecue.users} barbecueId={barbecue.id} />
          </Content>
        </Container>
      ))}
    </Modal>
  );
};
