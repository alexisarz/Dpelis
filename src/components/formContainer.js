import React from 'react';
import SignUp from './signUp';
import Login from './login'

function FormContainer(){
    return(
        <div className="form-container">
            <Login/>
            <SignUp/>
        </div>
    )
}

export default FormContainer;