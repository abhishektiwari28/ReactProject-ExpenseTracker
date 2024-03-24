import React, { useContext }from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const {transcation} = useContext(GlobalContext)

  const amounts = transcation.map(transcation => transcation.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
        <h4>Your Balance</h4>
      <h1>₹{total}</h1>
    </>
  )
}
