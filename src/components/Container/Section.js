import React from 'react';
import './Section.css'

function Section({heading, content, styling}){

    return(
        <span style={styling?{styling}:null} className = 'section__container'>
            <span style={styling?{styling}:null} className='section__heading'>{heading}</span>
            <span style={styling?{styling}:null} className='section__content'>{content}</span>
        </span>
    )
}

export default Section;