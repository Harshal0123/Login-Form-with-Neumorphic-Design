import React from 'react';
import './App.css';
import {Animated} from "react-animated-css";



const App = () =>{
    return(
        <>
             
                <div class='content'>
                    <div class='text' >
                        Welcome
                    </div>

                    <form action='#'>
                        <div class='field'>
                            <span class='fas fa-user'></span>
                            <input type='text' placehoder='Enter UserName' required/>
                        </div>
                        <div class='field'>
                            <span class='fas fa-lock'></span>
                            <input type='password' placehoder='Enter Password' required/>
                        </div>

                        <div class='forget-pass'>
                            <a href='#'>Forget Password</a>
                        </div>
                        <button>Log In</button>
                        <div class='signup'>
                            Not a member? 
                            <a href='#'> SignUp Now</a>
                        </div>
                    </form>
                    <div class='footer'>
            <ul>
                <li>
                    <a href='#'><i class='fab fa-facebook-f'></i></a>
                </li>
                <li>
                    <a href='#'><i class='fab fa-instagram'></i></a>
                </li>
                <li>
                    <a href='#'><i class='fab fa-twitter'></i></a>
                </li>
                <li>
                    <a href='#'><i class='fab fa-pinterest'></i></a>
                </li>
                <li>
                    <a href='#'><i class='fab fa-whatsapp'></i></a>
                </li>
            </ul>
      </div>
                </div>
        </>
    );
};

export default App;