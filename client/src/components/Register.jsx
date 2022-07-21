// ------------------------------------------------Imports
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = (props) => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
    })

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitting");
    }

    return (
        <>
            {JSON.stringify(user)}
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName"
                    value={user.firstName} onChange={changeHandler}
                    placeholder="John" />

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName"
                    value={user.lastName} onChange={changeHandler}
                    placeholder="Doe" />

                <label htmlFor="emailAddress">Email Address:</label>
                <input type="text" name="emailAddress"
                    value={user.emailAddress} onChange={changeHandler}
                    placeholder="JohnDoe@email.com" />

                <label htmlFor="password">Password:</label>
                <input type="text" name="password"
                    value={user.password} onChange={changeHandler}
                    placeholder="JohnDoe@email.com" />

                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register;