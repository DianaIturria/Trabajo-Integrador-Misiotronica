import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../components/Footer.css';


function Footer() {
    return (
        <div className='footer-container'>
            <div className='socialMedia'>
                <InstagramIcon /> <TwitterIcon /> <FacebookIcon />
            </div>
            <h5> Misiotrónica &copy; 2023 Todos los derechos reservados</h5>
        </div>
    );
}

export default Footer;