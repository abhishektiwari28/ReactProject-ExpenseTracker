import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transcation } from './Transcation'

export const TranscationList = () => {

  const {transcation} = useContext(GlobalContext)
  
  return (
    <>
    <h3>History</h3>
      <ul  className="list">
        {transcation.map(transcation => (
          <Transcation key={transcation.id}  transcation={transcation}/>
        ))}
      </ul></>
  )
}

