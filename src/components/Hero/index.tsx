import React from 'react';
import { CreateChurras, Container } from './styles';
import addIcon from '../../assets/add.svg';

interface HeaderProps {
  onOpenNewBarbecueModal: () => void;
}

export const Hero = ({ onOpenNewBarbecueModal }: HeaderProps) => {
  return (
    <Container>
      <div>
        <h3>Agenda de Churras</h3>
        <span>E ai, vamos marcar um churrasco?</span>
      </div>
      <CreateChurras type="button" onClick={onOpenNewBarbecueModal}>
        <span>Marca churras</span>
        <img src={addIcon} alt="" />
      </CreateChurras>
    </Container>
  );
};
