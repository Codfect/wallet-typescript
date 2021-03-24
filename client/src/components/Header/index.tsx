import { useState } from 'react';
import logoSvg from '../../assets/logo.svg';
import Modal from 'react-modal';

import { Container, Content } from './styles'

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="wallet"/>
        <button type="button" onClick={handleOpenModal}> 
          Nova transação
        </button>

        <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
          <h2>check the modal</h2>
        </Modal>
      </Content>
    </Container>
  )
}