import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'
function Additem({newItem21,setNewitem,handleSubmit}) {
  const inputRef=useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItems'>Add Items</label>
        <input
            autoFocus
            id='addItems'
            ref={inputRef}
            type="text"
            placeholder='Add Item'
            required
            value={newItem21}
            onChange={(e)=>setNewitem(e.target.value)}
        />
        <button type='submit' 
        aria-label='Add Items'
        onClick={()=>  inputRef.current.focus()}
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default Additem