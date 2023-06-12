import React from 'react';

const Login = () => {
    return (
        <div className="login">
            <form>
                <h1>Login</h1>
                <label htmlFor="">Username</label>
                <input type="text" name="username" placeholder="ryan" />
                <label htmlFor="">Password</label>
                <input type="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
