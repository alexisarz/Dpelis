import React, {createRef, useState} from 'react';


function SignUp(){
    const [data, setData] = useState({
        name:'',
        lastname:'',
        email:'',
        password:''
    })

    const handleInputChange = (e) =>{
        console.log(e.target.value)
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    let formRef = createRef();
    let nameRef = createRef();
    let lastnameRef = createRef();
    let emailRef = createRef();
    let passwordRef = createRef();
    let passwordRef2 = createRef();
    let resRef = createRef();

    const Send = () =>{
        setData({
            name:"",
            lastname:"",
            email:"",
            password:""
        })
        formRef.current.reset()
        resRef.current.innerText = "Listo! En unos minutos te enviaremos un email"
    }
    
    const onSubmitHandle = (e) =>{
        let res = []
        e.preventDefault()
        if(nameRef.current.value === null || nameRef.current.value === ""){
            res.push("Ingresá un nombre")
            resRef.current.innerText = res
        }

        else if(lastnameRef.current.value === null || lastnameRef.current.value === ""){
            res.push("Ingresá un apellido")
            resRef.current.innerText = res
        }

        else if(emailRef.current.value === null || emailRef.current.value === ""){
            
            res.push("Ingresá un email válido")
            resRef.current.innerText = res
        }

        else if(passwordRef.current.value === null ||
                passwordRef.current.value ==="" ||
                passwordRef.current.value.length < 5 ||
                passwordRef.current.value.length > 20){
           
            res.push("Ingresá una contraseña entre 5 y 20 caracteres")
            resRef.current.innerText = res
        }
        
        else if(passwordRef2.current.value !== passwordRef.current.value){
            res.push("Las contraseñas no coinciden")
            resRef.current.innerText = res
        }

        else{Send()}
        
    }


    
    return ( 
        
        <div className="signup-form-container">
            <form ref={formRef} className="signup-form" onSubmit={onSubmitHandle}>
                    <h3>Registrate con nosotros</h3>
                    <br></br>
                    <input ref={nameRef}
                           className="form-input" 
                           onChange={handleInputChange} 
                           type="text" 
                           name="name" 
                           placeholder="Ingresá tu nombre" 
                    />
                    <input ref={lastnameRef} 
                           className="form-input" 
                           onChange={handleInputChange} 
                           type="text" 
                           name="lastname" 
                           placeholder="Ingresá tu apellido" 
                    />
                    <input ref={emailRef} 
                           className="form-input" 
                           onChange={handleInputChange} 
                           type="email" 
                           name="email" 
                           placeholder="Ingresá tu email" 
                    />
                    <input ref={passwordRef} 
                           className="form-input" 
                           onChange={handleInputChange} 
                           type="password" 
                           name="password" 
                           placeholder="Ingresá tu contraseña" 
                    />
                    <input ref={passwordRef2} 
                           className="form-input" 
                           onChange={handleInputChange} 
                           type="password" 
                           name="password-again" 
                           placeholder="Ingresala otra vez" 
                    />
                    <div>
                        <p ref={resRef} className="form-error"></p>
                    </div>
            
                    <div className="form-btn-container">
                        <input className="form-btn" type="submit" value="Registrarse"/>
                    </div>

            </form>
     
        </div> 
                
            
        
    )
}

export default SignUp;