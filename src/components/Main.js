import React from "react";
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import ProtectedRoute from "./ProtectedRoute";

function Main() {

    return(
        <div id="main">
            <Routes>
                <Route 
                    exact path="/" 
                    element ={<Login/>}
                />
                <Route
                    path="/users"
                    element={<ProtectedRoute/>}
                />
            </Routes>
        </div>
        );
};

export default Main;