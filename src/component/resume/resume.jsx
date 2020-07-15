import React, { Component } from 'react'
import Iframe from 'react-iframe';
import './resume.scss';

export default class resume extends Component {
    render() {
        return (
            <div className='wrapper'>
            <div className="resume">
                <Iframe url="https://docs.google.com/document/d/e/2PACX-1vTe4d5QCXzAnXhwKFuk7Vzn4K0Hc45XF8fa_BDQM1WUenXAEHeI5eb1VINJ-Jhj8OzzPURI-RQ5O6_I/pub?embedded=true"
                    width="60%"
                    height="900px"
                    className="resume"
                    display="initial"
                    />
            </div>                     
            <div className="message"><p>Please view on desktop</p></div>
</div>
           
        )
    }
}
