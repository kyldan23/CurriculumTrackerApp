import React from 'react';
import './Login.css';

export default function Login() {
  
  return(
    <header>Plextech Full-Stack Curriculum
      <h1>Login</h1> 
      <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </header>
    
  );
}
