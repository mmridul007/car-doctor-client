// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Shared = () => {
    const {googleSignIn} = useContext(AuthContext)
    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center mb-8">
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
          G
        </button>
      </div>
    </div>
  );
};

export default Shared;
