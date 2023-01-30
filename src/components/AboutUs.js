import React from 'react';

const AboutUs = ({activeLanguage}) => {
    return (
        <div className='AboutUs' style={{'textAlign': 'center', 'fontSize': '20px', 'marginTop': '3rem'}}>
            <span>{activeLanguage === 0 ? "Hello ! I'm Ilya. I'm from Ukraine. And I developed this web-app" : 'Привіт ! Я Ілля. Я з України. І я розробив цей веб-додаток'} <br/>{activeLanguage === 0 ? "for students that need base content for their knowledge base. It's like spy" : 'для студентів, яким потрібен базовий вміст для їх бази знань. Це як шпигунський'} <br/> {activeLanguage === 0 ? 'copybook. You can open it, look for something you need and close.' : 'зошит. Його можна відкрити, знайти щось потрібне і закрити.'} </span>
            <br />
            <br />
            <span>{activeLanguage === 0 ? 'Here is' : 'Ось і '} <a target={'_blank'} href="https://t.me/+kskcyx0jZ5pjNGUy"> {activeLanguage === 0 ? 'link': 'посиланні'}</a> {activeLanguage === 0 ? 'to my telegram channel' : 'до мого телеграм каналу'}</span>
        </div>
    );
};

export default AboutUs;