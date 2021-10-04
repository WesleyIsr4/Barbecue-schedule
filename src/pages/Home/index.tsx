import React, { useState } from 'react';
import { Barbecue } from '../../components/Barbecue';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { NewBarbecueModal } from '../../components/NewBarbecueModal';
import { Container, Content } from './styles';

export const Home = () => {
  const [isNewBarbecueModalOpen, setIsNewBarbecueModalOpen] = useState(false);

  function handleOpenNewBarbecueModal() {
    setIsNewBarbecueModalOpen(true);
  }

  function handleCloseNewBarbecueModal() {
    setIsNewBarbecueModalOpen(false);
  }

  return (
    <Container>
      <Header />
      <Content>
        <main>
          <Hero onOpenNewBarbecueModal={handleOpenNewBarbecueModal} />
          <Barbecue />
          <NewBarbecueModal
            isOpen={isNewBarbecueModalOpen}
            onRequestClose={handleCloseNewBarbecueModal}
          />
        </main>
      </Content>
    </Container>
  );
};
