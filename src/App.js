import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';
import { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

function App() {
  const [cards, setCards] =useState([]);
  const [carts, setCarts] =useState([]);
  
  const handleAddToCart =(addCart)=>{
    console.log(addCart)
    const newArray = [...carts, addCart]
    setCarts(newArray);
  }

  useEffect(()=>
    fetch('data.json')
    .then(res => res.json())
    .then(data =>setCards(data))
  ,[])
  return (

    <div className="App">
      <Navbar></Navbar>
      
      <div className='sidebar'>
      <div className='card-container'>
      {
        cards.map((card)=>(<Card card={card} handleAddToCart={handleAddToCart}/>))
      }
    </div>
    <div className='bar-style'>
    <Sidebar></Sidebar>
    <div>
      {
          carts.map((item)=>( <h2>{item.name}</h2> ))
        }
      </div>
      <button className='choose-btn'>CHOOSE 1 FOR ME</button>
      <button className='choose-btn'>CHOOSE AGAIN</button>
    </div>
      </div>
      
    </div>
  );
}

export default App;
