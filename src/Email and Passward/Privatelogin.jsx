import React from 'react'
import { Outlet } from 'react-router-dom';

const Privatelogin=()=> {

    const islogin=true;

    if(islogin){
        return <Outlet/>
    }
    else{
        return "User not logger in"
    }

}

export default Privatelogin