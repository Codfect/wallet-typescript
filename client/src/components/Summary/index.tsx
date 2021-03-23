import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import totalSvg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSvg} alt="Entradas wallet"/>
        </header>
        <strong>R$7000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeSvg} alt="Saidas wallet"/>
        </header>
        <strong>- R$700,00</strong>
      </div>

      <div className="background">
        <header>
          <p>Total</p>
          <img src={totalSvg} alt="Total wallet"/>
        </header>
        <strong>R$6.300,00</strong>
      </div>
    </Container>
  );
}