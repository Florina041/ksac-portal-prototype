import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#ddd', display: 'flex', gap: '1rem' }}>
      <Link to="/">Home</Link>
      <Link to="/societies">Societies</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;