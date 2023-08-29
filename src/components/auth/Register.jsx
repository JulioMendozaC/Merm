import {useState} from 'react'
import {Link} from 'react-router-dom'


const Register = () => {

    const [user, setUsuario] = useState ({
        email: '',
        password: ''
    });
    
    const {email, password} = user ;
    

    const onChange = (e) =>{
        setUsuario ({
            ...user,
           [e.targe.name] : e.targe.value
        })
        
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (  
    <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
            <h1>Register</h1>
            <form 
            onSubmit={onSubmit}>
                <div className="campo-form">
                    <label htmlFor="email">Email:</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            onChange={onChange} 
                        />
                </div>
                <div className="campo-form">
                    <label htmlFor="password">Password:</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={onChange}
                        />
                </div>
                <div className="campo-form">
                    <input type="submit" className="btn btn-primario btn-block" value="Register" />
                </div>
            </form>
            <Link to={'/Register'} className="enlace-cuenta">
                Sing Up
            </Link>
        </div>
    </div>
    );
}
 
export default Register;