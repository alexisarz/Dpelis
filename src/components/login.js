import React from 'react';



function Login(){
        
    return (

            <div className="signup-form-container">
                <form className="signup-form" >
                        <h3>Iniciá sesion</h3>
                        <br></br>
                        <input className="form-input"  type="email" name="email" placeholder="Ingresá tu email" />
                        <input className="form-input" type="password" name="password" placeholder="Ingresá tu contraseña" />
                        <div><p className="form-error"></p></div>
                        <div className="form-btn-container">
                            <input className="form-btn" type="submit" value="Registrarse"/>
                        </div>

                </form>
                    
            </div> 
                    
                
            
        )
}


export default Login;