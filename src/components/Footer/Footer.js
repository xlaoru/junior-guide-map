import React from 'react';
import './Footer.css'

import jgm_logo from '../../images/jgm-logo.png'

const Footer = () => {
    return (
        <footer className='Footer'>
            <h5>Copyright © 2023. <br/> All rights are reserved</h5>
            <img src={jgm_logo}/> 
        </footer>
    );
};

export default Footer;