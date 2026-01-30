import React from 'react'
import { useSelector } from 'react-redux'

const ChaeckStates = () => {
    const count = useSelector(state => state.counter.value)
  return (
    <div>
      this is count : {count}
    </div>
  )
}

export default ChaeckStates
