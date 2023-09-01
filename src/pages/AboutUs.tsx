import { IAboutUsProps } from "../utils/Interfaces";

function AboutUs({activeLanguage}: IAboutUsProps) {
    return (
        <div className="AboutUs">
            <span>{activeLanguage === 0 ? `Hello! I'm Ilya and I'm React Front-End developer.` : `Привіт! Мене звати Ілля і я React Front-End розробник`}</span>
            <span>{activeLanguage === 0 ? `You can see more about me on my personal portfolio web-site` : 'Ви можете побачити трошки більше про мене на моєму особистому веб-сайті із портфоліо'}: https://hlaoru.netlify.app/</span>
        </div>
    );
};

export default AboutUs;