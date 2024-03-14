import React from 'react'
import { Outlet } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';
import { useContext } from 'react';

const Privatelogin=()=> {
    
  const authcontext= useContext(AuthContext)
    const islogin=authcontext.vstate;

    if(islogin){
        return <Outlet/>
    }
    else{
        return (
            <>
            <h1 style={{fontSize:"50px"}}>User not logged in</h1>
            </>
        )
    }

}

export default Privatelogin