import React from 'react';
import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import { BarbecueProvider } from './hooks/BarbecuesContext';
import Routes from './routes';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <BarbecueProvider>
        <GlobalStyle />
        <Routes />
      </BarbecueProvider>
    </BrowserRouter>
  );
};

export default App;
