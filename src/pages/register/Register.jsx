import React from 'react'
import { Link } from 'react-router-dom';
import "./Register.scss";

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Socio World.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Modi, ducimus repellat. Accusamus voluptate repellat, 
            quisquam animi delectus at earum libero tenetur architecto 
            ducimus ab unde vitae laudantium adipisci aliquam odit.
          </p>
          <span>Do you have any account?</span>
          <Link to="/login" ><button>Login</button></Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder='username'/>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <input type="text" placeholder='name'/>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register