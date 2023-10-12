import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../components/slice';
function SampleWithStore() {
  const [name, setName] = useState('TEST');
  const dispatch = useDispatch();
  return (
    <>
    <div> {name}</div>
      <button onClick={() => {
        setName("Prasanth");
        dispatch(increment());
      }} />
      <button onClick={()=>setName("Jithin")}/>
    </>
  )
}

export default SampleWithStore