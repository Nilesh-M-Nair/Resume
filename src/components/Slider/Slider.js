import React from 'react';
import Customer from './Customer';
import './Slider.css'

function Slider(){

   return(
       <>
       <span className ='slider'>
            <span className = 'slider__heading'>Previous Organization</span>
            <Customer/>
       </span>
       </>
    )
        
}

export default Slider;