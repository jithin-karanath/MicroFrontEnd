import { useState } from 'react'

function Button() {
  const [name, setName] = useState('TEST');
  return (
    <>
    <div> {name}</div>
      <button onClick={() => setName("Prasanth")} />
      <button onClick={()=>setName("Jithin")}/>
    </>
  )
}

export default Button