import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Inputs</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>U$ 20,000.00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Outputs</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>U$ 20,000.00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>U$ 20,000.00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
