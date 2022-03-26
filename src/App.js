import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';
import { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

function App() {
  const [cards, setCards] =useState([]);
  const [carts, setCarts] =useState([]);

  function myNumber(){
    const randNumber = cards[Math.floor(Math.random() * cards.length)];
  return randNumber;
  }
  
  
  // console.log(cards)


  const handleAddToCart =(addCart)=>{
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
      <Navbar ></Navbar>
      
      <div className='sidebar'>
      <div className='card-container'>
      {
        cards.map((card)=>(<Card key={card.id} card={card} handleAddToCart={handleAddToCart}/>))
      }
    </div>
    <div className='bar-style'>
    <Sidebar ></Sidebar>
    <div>
      {
          carts.map((item)=>( <h2 key={item.id}>{item.name}</h2> ))
        }
      </div>
      <button className='choose-btn'>CHOOSE 1 FOR ME</button>
      <button className='choose-btn'>CHOOSE AGAIN</button>
    </div>
      </div>
      <h4>Question 1 :How react works?</h4>
      <p>Answer: React has it's own DOM. In react when component's state changees, code is re rendered by DOM. When a browser show every element on the screen , there are involve a lot of calculution and mathmetics. More the items to repaint slower the app. And it is the main reason react has Virtual DOM. Virtual DOM helps the minimization of actual changes on browser DOM. </p>
      <h4>Question 2 : what is the difference between props vs state?</h4>
      <p>1. Prop's data is passed from one component to another. On the other hand state's data is passed the data within the component only.</p>
      <p>2. Props is immutable. on the other hand , states is mutable</p>
      <p>3. Props are read only. but state is both read and write</p>
    </div>
    
  );
}

export default App;
