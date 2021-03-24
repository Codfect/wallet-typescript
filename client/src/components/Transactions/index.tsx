import { Container } from "./styles";

export function Transactions() {
  return(
    <Container> 
      <table>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>

        <tbody>
          <td>Dev</td>
          <td className="up">R$7.000,00</td>
          <td>Desenvolvimento</td>
          <td>20/02/2021</td>
        </tbody>

        <tbody>
          <td>Dev</td>
          <td className="down">R$700</td>
          <td>Desenvolvimento</td>
          <td>20/02/2021</td>
        </tbody>
      </table>
    </Container>
  );
}