import React from 'react'
//import { FaTrashAlt } from "react-icons/fa";
import ItemsList from './ItemsList'

function Content({items,handleClick,handleDelete}) {
    {/*function handleNameChange() {
        const names=["Earn","Grow","Give"]
        const inti=Math.floor(Math.random()*3)
        return names[inti]
      }
      const handleClick=()=>{
        console.log("Thanks for the Supports")
      }
      const handleClick2=(name)=>{
        console.log(`Thanks for the Supports ${name}`)
      }*/}


     {/* const [count,setCount]=useState(99)*/} 
      {/*const [count,setCount]=useState(0)
      const incrementFunction=()=>{
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)
        setCount((prev)=>{return prev+1})
      }
      const decrementFunction=()=>{
        setCount(count => count-1)
      }

      
      const [name21,setName]=useState("Earn")
      function handleName() {
        const names=["Earn","Grow","Give"]
        const inti=Math.floor(Math.random()*3)
        setName(names[inti])
      }  */}

      
  return (
    <>
      {/*reload panna panna tha maarum it take more time and it will give less performance*/}
      {/** <p>Let's {handleNameChange()} Money</p>  
        <button onClick={handleClick}>Subscribe</button>
        <button onClick={()=>handleClick()}>Subscribe</button>  
        <button onClick={()=>handleClick2("Bala")}>Subscribe</button>
        <p onDoubleClick={()=>handleClick2("thinesh")}>Let's {handleNameChange()} Money</p>

        <p>Let's Earn Money</p>
        <button>Sub</button>
        <button onClick={decrementFunction}>-</button>
        <span>{count}</span>
        <button onClick={incrementFunction}>+</button>



        <p>Let's {name21} Money</p>
        <button onClick={handleName}>Super</button> */} 

        {/**<------React_List and Keys---------> */}
        

        {(items.length)? (
            <ItemsList
            items={items}
            handleClick={handleClick}
            handleDelete={handleDelete}
            />
        
        ):(
        <p>Your List is empty</p>)
        }
      
    </>
    
  )
}

export default Content