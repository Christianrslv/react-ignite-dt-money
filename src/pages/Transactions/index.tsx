import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContainer } from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <table>
          <tbody>
            <tr>
              <td width="50%">Site development</td>
              <td>U$ 12,000.00</td>
              <td>Sale</td>
              <td>02/20/2023</td>
            </tr>
            <tr>
              <td width="50%">Hamburger</td>
              <td>- U$ 12.00</td>
              <td>Food</td>
              <td>02/20/2023</td>
            </tr>
          </tbody>
        </table>
      </TransactionsContainer>
    </div>
  )
}
