import React,{useState, useEffect} from 'react';
import Customer from './Customer';

import './Slider.css'

const zero = 0;
const number = 2;

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