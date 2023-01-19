import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import "./Login.scss";

const Login = () => {
  const {login} = useContext(AuthContext);
  const handleSubmit = ()=>{
    login();
  }
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Modi, ducimus repellat. Accusamus voluptate repellat, 
            quisquam animi delectus at earum libero tenetur architecto 
            ducimus ab unde vitae laudantium adipisci aliquam odit.
          </p>
          <span>Don't have any account?</span>
          <Link to="/register" ><button>Register</button></Link>
          
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='password'/>
            <button onClick={handleSubmit}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login