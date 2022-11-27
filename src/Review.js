import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { useReducer } from 'react';

const Review = () => {
  function reducer(Cstate, type) {
    switch (type) {
        case "increment":
            return {index:Math.min(Cstate.index+1,people.length-1)};
        case "decrement":
            return{index:Math.max(Cstate.index-1,0)};
        case "random":
            return {index:Math.floor(Math.random()*people.length)}
        default:
            return Cstate;
      }
  }
  const [state,setIndex]=useReducer(reducer,{index:0})
  const {id,name,job,image,text}=people[state.index]
  
  return <div className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className="person-img"/>
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <div className='author'>{name}</div>
    <p className='info'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' 
      onClick={()=>setIndex("decrement")}>
        <FaChevronLeft />
      </button>
      <button className='next-btn'
        onClick={()=>setIndex("increment")}>
        <FaChevronRight />
      </button>
      <button className='random-btn'
      onClick={()=>setIndex("random")}>
        surprise mes
      </button>
    </div>
  </div>;
};

export default Review;
