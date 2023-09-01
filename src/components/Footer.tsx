import jgm_logo from '../assets/jgm-logo.png'
import { IFooterProps } from '../utils/Interfaces';

const Footer = ({activeLanguage}: IFooterProps) => {
    return (
        <footer className='Footer'>
            <h5>Copyright © 2023. <br/> {activeLanguage === 0 ? 'All rights are reserved' : 'Усі права захищені'}</h5>
            <img src={jgm_logo}/> 
        </footer>
    );
};

export default Footer;