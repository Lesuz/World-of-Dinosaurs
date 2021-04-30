import {Link} from 'react-router-dom';
import './Components.css'
import logo from '../img/dinologo.png'


const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="dinosaur logo"></img>
            </div>
            <menu>
                <Link to="/">Dinosaurs</Link>
                <Link to="/about">About this website</Link>
            </menu>
        </header>
    )
}

export default Header