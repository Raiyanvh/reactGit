import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav style={{ background: '#333', padding: '1rem', textAlign: 'center' }}>
      <Link to="/" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>About</Link>
      <Link to="/contact" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}