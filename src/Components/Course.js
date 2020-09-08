import React from 'react';
import "./Course.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'


const Course = (props) => {

    const {img,name,instructor,price} = props.course;
    const handleAddClick = props.handleAddClick;
    return (
        <div className="container">

            <div className="top-area">
                <div className="image-area">
                    <img src={img} alt="images"/>
                </div>

                <div className="detail-area mx-auto">
                    <h2 id="name">{name}</h2>
                    <p>Instructor : {instructor}</p>
                    <h4>Price : ${price}</h4>
                    <br/>
                    <button onClick={() => handleAddClick(props.course)} class="btn btn-dark"><FontAwesomeIcon icon={faCreditCard} /> Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;