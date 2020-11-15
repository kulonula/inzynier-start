import React from 'react'
import { Button } from './Button';
import "./LogIn.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function LogIn(){
    return(
        <div className='sign-up-form'>
            <form>
                <label htmlFor="email">Email</label>
                <br/>
                <input
                    type="email"
                    id="email"
                    placeholder = "Email"  />
                <br/><br/><br/>

                <label htmlFor= "password">Password</label>
                <br/>
                <input
                    type="text"
                    id="password"
                    placeholder="Password"/>
                    <br/> <br/>
                <Button id='btn-sign-in'
                        onClick={addUser}
                    buttonStyle='btn--outline'>Sign Up!</Button>

                <Button id='btn-log-in'
                        //onClick=  AUTHENTICATION
                        buttonStyle='btn--outline'>Log In!!</Button>
            </form>
        </div>
    );

}


let login_data =[];
const addUser = (ev)=>{
    ev.preventDefault();
    let user = {
        id : Date.now(),
        email:document.getElementById('email').value,
        password:document.getElementById('password').value
    }
    login_data.push(user);
    document.forms[0].reset();
   console.log(login_data);

   //save to local storage
    localStorage.setItem('UsersLoggingData',JSON.stringify(login_data));
    //console.log(localStorage.get("password"));

}
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('btn-sign-in').addEventListener('click', addUser);
// });

export default LogIn;