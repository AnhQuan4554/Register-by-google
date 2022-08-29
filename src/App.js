import logo from './logo.svg';
import React from 'react';
import './App.css';
import {User_authen}from './Context/Authen_context'
function App() {
  const {googleSign,user,logOut} = User_authen()
  
  const handleGoogleSignIN  = async()=>{

    try{
      await googleSign();

    }catch(error){
      console.log(error)
    }
  }
  return (
 

      <div >
          <button onClick={handleGoogleSignIN}>Click Now</button>
      </div>

  );
}

export default App;
