import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Home from './Home';

export const Login = () => {
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const [submit,setSubmit] = useState(false);

    async function getLoginUserData(){
      const result = await fetch('http://localhost:3001/login')
      const final = result.json();
      console.log(final);
    } 

    getLoginUserData();

    function handleSubmit(e){
        e.preventDefault();
        console.log(user,password);
        if(user.trim() === "" ){
            alert("Please enter username")
        }else if(password.trim() === ""){
            alert("Please enter correct password")   
        }else{
            alert("Form is Submitted")
            setSubmit(true);
        }
    }

    function SignUpPage(){
          
    }

    if(submit){
        return <Home/>
    }
  return (
    <div className='d-flex p-5 text-center flex-column'>
        <h1 className='p-5'>Login Page</h1>
        <form onSubmit={handleSubmit}>
        <TextField
          onChange={(e)=>setUser(e.target.value)} 
          className='mb-4'
          id="email" 
          label="username" 
          variant="outlined" 
          type="email"
        />
        <br/>
        <TextField
          onChange={(e)=>setPassword(e.target.value)} 
          className='mt-3'
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <br/>
        <Button
         className='m-4'
         type='submit'
         variant="outlined">Submit</Button>
        </form>
        <div>
          <p className='m-0'>Don't have an account?</p>
          <p className='text-secondary'>Please Sign Up</p>
          <button className='btn  border-dark' onClick={SignUpPage}>SignUp</button>
        </div>
    </div>
  )
}
