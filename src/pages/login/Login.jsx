import React from 'react'
import "./Login.scss";

const Login = () => {
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
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='password'/>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login