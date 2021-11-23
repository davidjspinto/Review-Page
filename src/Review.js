import React, { useState } from 'react';
import reviews from './data';
import "./index.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  
  const people = reviews;
  const userLenght = people.length;
  const[index, setIndex] = useState (0);

  const handlePrevPerson = () => {
    if(index === 0){
      setIndex(userLenght-1)
    } else {
      setIndex(index-1)
    }
  }

  const handleNextPerson = () => {
    if(index === userLenght-1){
      setIndex(0)
    } else {
      setIndex(index+1)
    }
  }

  const handleRandomPerson = () => {
    let userRandomID = Math.floor(Math.random()*userLenght+1)
    if(index== (userRandomID-1)){
  
    }else{
      setIndex(userRandomID-1)
    }
  }
  
  return (
    <div>
      <div className="container review">
        <div className="img-container">
          <img className="person-img" src={people[index].image} alt="" />
        </div>
        <h3>{people[index].name}</h3>
        <p className="job">{people[index].job}</p>
        <p cçassName="info">{people[index].text}</p>
        <div>
          <button type="button" onClick={handlePrevPerson}><FaChevronLeft /></ button>
          <button type="button" onClick={handleNextPerson}><FaChevronRight /></button>
        </div>
        <button className="random-btn" type="button" onClick={handleRandomPerson}>Surprise Me</button>
      </div>
    </div>
  
)};

export default Review;