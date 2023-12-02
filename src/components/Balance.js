import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
const Balance = () => {
    const {transaction} = useContext(GlobalContext)
    const amount = transaction.map(transaction=>transaction.amount);
    const total = amount.reduce((acc,item) => (acc += item),0).toFixed(2);
  return (
    <>
    <h4>Your Balnce</h4>
    <h1>${total}</h1>
      
    </>
  )
}

export default Balance
