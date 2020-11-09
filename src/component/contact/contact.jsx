import React from 'react';
import './contact.scss';

const Contact = () => {
    return (
        <div className='containerFive'>
            <div className='scrollImage' />
                <div className='contact-InfoDiv'>
                    <p>Want to hire me? Cool!</p>
                </div>
                <div className='whereToFind'>
                    <p className='find'>FIND ME HERE:</p>
                    <div className='email'>
                        <a href="mailto:ashabraimfrauen@gmail.com">Email</a>
                    </div>
                    <div className='linkedIn'>
                        <a href='https://www.linkedin.com/in/braifrauen/'> LinkedIn</a>
                    </div>
                    <div className='github'>
                        <a href ='https://github.com/ashabrai'>Github</a>
                    </div>
                </div>
        </div>
    )
}

export default Contact;
