import React from 'react'
import { createContext, useContext } from 'react'
import { useState } from 'react';
import New from '../New';


export const AuthContext = createContext();

function AuthProvider() {

  const [vstate, setvstate]=useState(true);
  console.log(vstate);
  return (
    <AuthContext.Provider value={{vstate, setvstate}}>
        <FirebaseHome/>
    </AuthContext.Provider>
  )
}

export default AuthProvider