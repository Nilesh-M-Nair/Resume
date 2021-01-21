import React from 'react';
import { Link } from 'react-router-dom';
import './Action.css'

function Action(){
    return(
        <div className='action'>
            <div className ='action__container' >
                <div className='action__content'>
                    <span className='action__content_h'>Nilesh M Nair</span>
                    <span className ='action__content_p'>A React Developer with 1.5+ years designing useful, approachable user interfaces. Knowledgeable on all
aspects of Facebook's design best practices and emerging UI development techniques. Skilled at
connecting exceptional assets with users via creative UI frameworks and careful user experience
optimisation.</span>
                    <a className = 'action__content_link' href = "mailto:nilesh.m.nair?subject =Looking for React.js Developer&body = Kindly get connect with us">nilesh.m.nair@gmail.com</a>
                </div>
                <img className='action__image' src ='images/nilesh.jpeg' alt = 'me.png'/>
                {/* <img className='action__image' src ='images/HP_Image.webp' alt = 'HP_Image.png'/> */}
            </div>
        </div>
    )
}

export default Action;