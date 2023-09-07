import translation from '../assets/translation';
import getText from '../utils/getText';

import jgm_logo from '../assets/images/jgm-logo.png'

const Footer = () => {
    return (
        <footer className='Footer'>
            <h5>Copyright © 2023. <br/> {getText(translation.footer.copyright)}</h5>
            <img src={jgm_logo}/> 
        </footer>
    );
};

export default Footer;