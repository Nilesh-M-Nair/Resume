import React from 'react';
import {socialJSON} from '../../data';
import './social.css'

function Social() {

    return(
        <span className='social'>
            <span className='social__container'>
                <span className='social__box1'>
                    <a href='https://www.linkedin.com/in/nilesh-nair-45434315a/'>
                        <img className="social__image-linkedin" src={socialJSON[0].path} alt={socialJSON[0].alt}/>
                    </a>
                </span>
                <span className='social__box2'>
                    <a href='https://github.com/Nilesh-M-Nair'>
                        <img className="social__image-git" src={socialJSON[1].path} alt={socialJSON[1].alt}/>
                    </a>
                </span>
            </span>
        </span>
    )
}

export default Social;