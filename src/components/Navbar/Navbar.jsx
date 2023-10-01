import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className='nav__sticky'>
            <ul className='nav__ul'>
                <li className='nav__li'>
                    <Link to="/" className='btn'>
                        home
                    </Link>
                </li>
                <li className='nav__li'>
                    <Link to="/About" className='btn'>
                        about
                    </Link>
                </li>
                <li className='nav__li'>
                    <Link to="/Project" className='btn'>
                        project
                    </Link>
                </li>
                <li className='nav__li'>
                    <Link to="/Contact" className='btn'>
                        contact   
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar 