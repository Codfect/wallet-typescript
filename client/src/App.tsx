import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard'

import Modal from 'react-modal';

import { GlobalStyle } from './styles/global';
import { useState } from 'react';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header functionHandleOpenModal={handleOpenModal}/>
      <Dashboard />

      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <h2>check the modal</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}   