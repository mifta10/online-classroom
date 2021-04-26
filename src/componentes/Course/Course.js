import {React,useState} from 'react';
import Product from '../Product/Product';
import './Course.css';
import courses from '../../fakeData/course';
import Cart from '../Cart/Cart';

const Course = () => {
  const [cart,setCart] = useState([]);
  const handleCart = (courses) => {
    //console.log("Course Added",courses);
    const newCart = [...cart,courses];
    setCart(newCart);
  }
  return (
    <div className="class-container">
    <div className="course-container">
     {
       courses.map(courses=> <Product courses={courses} handleCart={handleCart}></Product>)
     }
    </div>
    <div className="cart-container">
      <Cart cart={cart}></Cart>
    </div>
    </div>
  );
};

export default Course;