export const formatMoney = (amount: number) => {
   return amount.toLocaleString('us-US', {
      style: 'currency',
      currency: 'USD'
   })
}