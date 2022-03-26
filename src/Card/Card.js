import React from 'react';
import './Card.css';
import {BsFillCartFill} from 'react-icons/bs'
const Card = (props) => {
    const {name, img, id,price} = props.card;
    console.log(props)
    return (
        <div className='card-style'>
            <img className='img-container' src={img} alt="" />
            <h1>name:{name}</h1>
            <p>id:{id}</p>
            <p>Price:{price}</p>
            <h5 className='btn-style'>ADD TO CART  <button onClick={()=>props.handleAddToCart(props.card)}><BsFillCartFill className='icon' /></button ></h5>

        </div>
    );
};

export default Card;