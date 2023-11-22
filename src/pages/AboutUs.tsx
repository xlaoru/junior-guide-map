import getText from '../utils/getText';
import translation from '../assets/translation';

import { IAboutUsProps } from "../utils/models";

function AboutUs({}: IAboutUsProps) {
    return (
        <div className="AboutUs">
            <span style={{'width': '600px', 'textAlign': 'center'}}>{getText(translation.aboutus.text)}: <a href="https://hlaoru.netlify.app/">{getText(translation.aboutus.link)}</a></span>
            <span></span>
        </div>
    );
};

export default AboutUs;