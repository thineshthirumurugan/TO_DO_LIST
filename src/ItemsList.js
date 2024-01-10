import React from "react"
import { FaTrashAlt } from "react-icons/fa";

function ItemsList({items,handleClick,handleDelete}) {
  return (
    <ul>
            {items.map((summa)=>(
              <li className="item" key={summa.id}>
                <input
                  type="checkbox"
                  onChange={()=>handleClick(summa.id)}
                  checked={summa.checked}
                />
                <label 
                style={(summa.checked)? {textDecoration: 'line-through'}:null}
                onClick={()=>handleClick(summa.id)}>{summa.item}</label>
                <FaTrashAlt
                  role="button"
                  onClick={()=>handleDelete(summa.id)}
                  tabIndex="0"
                />
              </li>
            ))}
            </ul>
  )
}

export default ItemsList