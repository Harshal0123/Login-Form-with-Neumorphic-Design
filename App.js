import React from 'react';
import './App.css';

const App = () =>{
    return(
        <>
             
                <div class='content'>
                    <div class='text' >
                        Welcome back
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
                </div>
        </>
    );
};

export default App;