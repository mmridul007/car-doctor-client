// import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Shared from '../home/Shared/Shared';

const Signup = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .then(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          
          <img src={img} alt="" />
        </div>
        <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name='confirm_password'
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Sign Up" className="btn btn-primary" />
            </div>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-orange-600  font-bold'>Log In</Link></p>
          </div>
          <Shared></Shared>
        </form>
      </div>
    </div>
    );
};

export default Signup;