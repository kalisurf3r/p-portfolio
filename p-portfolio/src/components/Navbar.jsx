import {Link, useLocation} from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const location = useLocation().pathname;

const fontStyles = {
    fontFamily: 'Inria Sans, sans-serif',
};
    
    return (
        <nav className='flex-auto border-b-4 border-black bg-primary'>
            <ul className='flex justify-end space-x-4 mr-6'>
                <li className='text-4xl mt-4 mr-8 text-white hover:text-gray-600' style={fontStyles}>
                    <Link to="/Project">Recent Work</Link>
                </li>
                <li  className='mr-4 hover:opacity-60'>
                    <Link to="https://github.com/kalisurf3r" className={`github-link ${location.pathname === '/github' ? 'active' : ''}`}>
                    <i className="bi bi-github" style={{ fontSize: '50px', color: 'white' }}></i>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}