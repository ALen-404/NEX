import { Currency } from '@uniswap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
import { AutoColumn } from 'components/Column'

export default function FeeSelector({
  disabled = false,
  feeAmount,
  handleFeePoolSelect,
  currencyA,
  currencyB,
}: {
  disabled?: boolean
  feeAmount?: FeeAmount
  handleFeePoolSelect: (feeAmount: FeeAmount) => void
  currencyA?: Currency | undefined
  currencyB?: Currency | undefined
}) {
  return <AutoColumn gap="16px"></AutoColumn>
}
