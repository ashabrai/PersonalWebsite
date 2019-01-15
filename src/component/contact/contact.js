import React from 'react';

import './contact.scss';

class Contact extends React.Component {
//     constructor(props){
//         super(props);
//         this.handleMouseHover = this.handleMouseHover.bind(this);
//         this.state = {
//             isHover:false
//         };
//     }
//         handleMouseHover = () => {
//            this.setState(this.toggleHoverState);
//         };

//         toggleHoverState = (state)=>  {
//             return{
//                 isHovering: !state.isHovering,
//             };
//         };

// onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
//{this.state.isHovering &&<div><p>ashabraimfrauen@gmail.com</p></div>}

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
