import logoSvg from '../../assets/logo.svg';

import { Container, Content } from './styles'

interface HeaderProps {
  functionHandleOpenModal: () => void;
}

export function Header({ functionHandleOpenModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="wallet"/>
        <button type="button" onClick={functionHandleOpenModal}> 
          Nova transação
        </button>
      </Content>
    </Container>
  )
}