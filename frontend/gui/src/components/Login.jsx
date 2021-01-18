import React, { Component, useState, useEffect } from "react";
import axios from 'axios';

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [user, setUser] = useState([])

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const handleFormSubmit = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:8000/api/users/`).then(res => {
            setCredentials([...user, res.data])
            console.log(res.data);
        });
    };
    return (
        <div>
            <form
                onSubmit={event =>
                    handleFormSubmit(event, props.requestType, props.userID)
                }
            >
                <input
                    name="username"
                    placeholder="input username"
                    onChange={handleChange}
                />
                <input name="email" placeholder="input email" onChange={handleChange} />
                <input
                    name="password"
                    placeholder="input password"
                    onChange={handleChange}
                />
                <button onSubmit={handleFormSubmit} type="primary" htmlType="submit">
                    {props.btnText}
                </button>
            </form>
        </div>
    );
};
export default Login;
