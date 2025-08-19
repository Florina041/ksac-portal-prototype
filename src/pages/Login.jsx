import { useState } from 'react';
import { useAuth } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Later this will be API call
    if (email === 'ksac@admin.com' && password === '123456') {
      login(); // sets isLoggedIn = true in AuthContext
      navigate('/societies'); // go to protected page
    } else {
      setError('Invalid credentials! Try again.');
    }
  };

  return (
    <div>
      <h2>🔐 Login to KSAC Portal</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email: </label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password: </label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;