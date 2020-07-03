import React from 'react';

import './contact.scss';

class Contact extends React.Component {

        render() {

            return (
                <section className='containerFive'>
                    <div>
                        <div className='scrollImage'> </div>

                        <div className='contact-InfoDiv'>
                            <p>Want to hire me? Cool!</p>
                        </div>

                        <div className='whereToFind'><p className='find'>FIND ME</p>

                            <div className='email'><a href="mailto:ashabraimfrauen@gmail.com">Email</a>
                            </div>

                            <div className='linkedIn'>
                            <a href='https://www.linkedin.com/in/braifrauen/'> LinkedIn</a></div>
                            <div className='github'>
                            <a href ='https://github.com/ashabrai'>Github</a>
                            </div>
                    </div>
                    </div>
                </section>
            )
        }
}

export default Contact;
