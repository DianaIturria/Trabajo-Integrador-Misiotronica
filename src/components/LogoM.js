import Logo from '../assets/logoNombre.png';
import './LogoM.css';

const LogoM = () => {
    return (
        <div>
            <img src={Logo} className='navbar-logo' alt='logo' />
          
        </div>
    );
}

export default LogoM;