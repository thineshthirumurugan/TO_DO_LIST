import React  from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState,useEffect } from 'react'
import Additem from "./Additem";
import SearchItems from "./SearchItems";
import apiRequest from "./apiRequest";

function App() {
  {/**<------React_List and Keys---------> */}
  const API_URL='http://localhost:3500/item';
  const [items,setItems]=useState(
  //   [
  //     {
  //       id:1,
  //       checked:false,
  //       item:"Practice Coding"
  //   },
  //   {
  //     id:2,
  //     checked:true,
  //     item:"Play Cricket"
  //   },
  //   {
  //     id:3,
  //     checked:false,
  //     item:"Read about AI"
  //   }
  //   ]
    //JSON.parse(localStorage.getItem('ToDoList')
    // JSON.parse(localStorage.getItem('ToDoList'))

    []
    )

    //High ordered list
    {/**const number=[-1,-2,-3,0,1,2,3]
    const itemss=number.filter(n=>n>=0)
    console.log(itemss)
    const mapfun=itemss.map(n=>({number:n}))
    console.log(mapfun) */}

  

    const [newItem21,setNewitem]=useState('')

    


    const handleClick=(id)=>{
          const listItmes=items.map((summa)=>
          summa.id===id ? {...summa,checked:!summa.checked}:summa)
          setItems(listItmes)
          //CRUD Operation
          //Update
          const myItem=listItmes.filter(item=>item.id===id)
          const updateOperation={
            method:'PATCH',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify({checked:myItem[0].checked})
          }    
          const reqUrl=`${API_URL}/${id}`
          const result=apiRequest(reqUrl,updateOperation);
    }
    const handleDelete=(id)=>{
      const listItme=items.filter((summa)=>
      summa.id!==id)
      setItems(listItme)
      //CRUD Operation
      //Delete
      const deleteOperation={
        method:'DELETE'
      }
      const reqUrl=`${API_URL}/${id}`
      const result=apiRequest(reqUrl,deleteOperation);
}
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(newItem21)
      addItem(newItem21)
      setNewitem('')
    }
    //add item |> item inside input box
    const addItem=(item)=>{
      const id = items.length ? items[items.length -1].id + 1 : 1
      const addnewitem={id,checked:false,item}
      const listitems=[...items,addnewitem]
      setItems(listitems)
      //CRUD Operation
      //Post
    const postOperation={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(addnewitem)
    }    
    const result=apiRequest(API_URL,postOperation);
  }

    const [search,setSearch]=useState('')
   
    useEffect(()=>{
      const fetchItems=async()=>{
        try {
            const response=await fetch(API_URL)
            if (!response.ok) throw Error("Data not received")
            console.log(response)
            const listify=await response.json()
            console.log(listify)
            setItems(listify)
        }catch(err){
            console.log(err.stack)
        }
      }
      setTimeout(()=>{
        (async()=>await fetchItems())()
      },2000)
  },[])

  return (
   <div className="App">
    <Header title="To Do List" />
    <Additem 
      newItem21={newItem21}
      setNewitem={setNewitem}
      handleSubmit={handleSubmit}
    />
    <SearchItems
      search={search}
      setSearch={setSearch}
    />
    <main>
    <Content
      items={items.filter(anyname=>((anyname.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
      handleClick={handleClick}
      handleDelete={handleDelete}
    />
    </main>
    <Footer
    length={items.length}
    />
   </div>
  );
}

export default App;
