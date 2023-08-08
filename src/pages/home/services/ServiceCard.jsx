// import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/Ai';
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id,title, img, price } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl h-48"
          />
        </figure>
        <div className="card-body grid grid-flow-col justify-between items-center">
            <div>
            <h2 className="card-title">{title}</h2>
          <p className="text-red-400">Price: ${price}</p>
            </div>
          
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}><AiOutlineArrowRight className='text-red-400'></AiOutlineArrowRight></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
