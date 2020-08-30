import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../Firebase';

import './Login.css';

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch((e) => alert(e.message));

    }

    const signup = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch((e) => alert(e.message));

    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" onChange={(event) => setEmail(event.target.value)} />
                    <h5>Password</h5>
                    <input type="text" onChange={(event) => setPassword(event.target.value)} />
                    <button onClick={login} className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By Signing-in, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={signup} className="login__signUpButton">Create your amazon account</button>
            </div>

        </div>
    )
}

export default Login
