// import React from 'react';
import person from '../../../images/about_us/person.jpg'
import parts from '../../../images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 mt-8 mb-8">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
        <img src={person} alt=""  className='w-3/4 rounded-lg shadow-2xl'/>
        <img src={parts} alt=""  className='w-1/2 rounded-lg shadow-2xl absolute right-7 top-1/2 border-8 border-white'/>
        </div>
        
            
        
        <div className='lg:w-1/2 space-y-5 p-4'>
            <h1 className='text-orange-500 font-bold text-2xl'>About Us</h1>
          <h2 className="text-5xl font-bold">We are qualified & of experience in this field</h2>
          <p className="">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className="">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-error">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
