import cars from '../../assets/pngegg.png';
import { Login } from "./logs/login";
import { Register } from "./logs/register";
import React, { useState } from "react";


export default function NotFound() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div style={{alignItems:'center',justifyContent: 'center',display:"flex",flexDirection: 'column', marginTop:'3rem'}}>
        { currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
       <img src={cars} alt="LOGIN PAGE" />
     </div>
  );
}
