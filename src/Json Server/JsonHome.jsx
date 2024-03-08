import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JsonServer from './JsonServer'
import CreateUser from './CreateUser'

function JsonHome() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<JsonServer/>}/>
                <Route path={"/create"} element={<CreateUser/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default JsonHome