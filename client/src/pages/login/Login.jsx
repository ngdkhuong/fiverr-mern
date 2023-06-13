import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { useState } from 'react';
import newRequest from '../../utils/newRequest';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await newRequest.post('/auth/login', { username, password });
            localStorage.setItem('currentUser', JSON.stringify(res.data));
            navigate('/');
        } catch (error) {
            setError(error.response.data);
        }
    };

    return (
        <div className="login">
            <form>
                <h1>Login</h1>
                <label htmlFor="">Username</label>
                <input type="text" name="username" placeholder="ryan" onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="">Password</label>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={handleSubmit}>
                    Login
                </button>
                {error && error}
            </form>
        </div>
    );
};

export default Login;
