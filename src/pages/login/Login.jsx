// import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Shared from '../home/Shared/Shared';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname|| '/';
    
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            
            navigate(from, {replace:true})
            
        })
        .then(error => console.log(error))
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          
          <img src={img} alt="" />
        </div>
        <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Login!</h1>
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
            <p className='text-center'>New to Car Doctor <Link to='/signup' className='text-orange-600  font-bold'>Sign Up</Link></p>
          </div>
          <Shared></Shared>
        </form>
      </div>
    </div>
  );
};

export default Login;
