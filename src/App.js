import React from 'react';
import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Course from './Components/Course';
import fakeData from "./FakeData/courses";


function App() {

  const [course, setCourse] = useState(fakeData);
  const [cart, setCart] = useState([]);

  const handleAddClick = (current) =>{
    const newCart = [...cart, current];
    setCart(newCart);
  }
  
  return (
    <div>
      <h1>Service We Provide</h1>
      <br/>
      <hr/>
      <br/>
      <div className="main-section">
        <div className="data-section">
          {
            course.map(course => <Course  handleAddClick={handleAddClick} key={course.id} course={course}></Course>)
          }
        </div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default App;
