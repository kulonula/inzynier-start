import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>About us</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <h1>It is that easy!</h1>
          <br/>
          <br/>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Sign In or Log In.'
              label='Step1'
              path='/sign-up'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Choose all the filters you need!'
              label='Step2'
              /*path='/products'*/
            />
            <CardItem
              src='images/img-8.jpg'
              text='Look for your perfect sitter.'
              label='Step3'
              /*path='/sign-up'*/
            />
            <CardItem
                src='images/img-8.jpg'
                text='Book your favourite sitter with one click!'
                label='Step4'
                /*path='/sign-up'*/
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
