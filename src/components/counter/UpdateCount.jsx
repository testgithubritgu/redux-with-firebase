import { addcount } from '@/features/countUpdate/updateCount';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const UpdateCount = () => {
    const value = useSelector((state) => state.updateCOunt.count);
    const dispatch = useDispatch()
  return (
    <div>
      {value}
      <hr />
      <hr />
      <hr />
      <button onClick={()=>dispatch(addcount(80))}>update count</button>
    </div>
  );
}

export default UpdateCount