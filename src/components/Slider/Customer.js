import React,{useState, useEffect} from 'react';
// import Avatar from '@material-ui/core/Avatar';
import {customersJSON} from '../../data'
import { FiChevronLeft ,FiChevronRight } from "react-icons/fi";
import './slide.css'

const zero = 0;
const number = 1;

function Customer(){

    const [user,setUser] = useState(0)

    const change = () => {
       return  user < 1 ? setUser(user+1): setUser(zero)
    }

    const changeback = () =>{
        return user > 0 ? setUser(user-1) : setUser(number)
    }

    useEffect(()=>{
        const interval = setInterval(change, 5000)
        return () => {
            clearInterval(interval)
        }
    })

    return(
        <span className='customer'>
            <span>
            <FiChevronLeft className='customer__backward' onClick={changeback}/>
            </span>
            <span className='customer__container'> 
                {/* <span className="customer__avatar_container">
                <Avatar className="customer__avatar" alt={customersJSON[user].alt} src={customersJSON[user].image} />
                </span> */}
                <span className='customer__content'>
                    <span className='customer__year'>{customersJSON[user].year}</span>
                    <span className='customer__text' >{customersJSON[user].text}</span>
                    <span className='customer__name'>- {customersJSON[user].name}</span>
                </span>
            </span>
            <span>
                <FiChevronRight className='customer__forward' onClick={change}/>
            </span>
        </span>
        
    )
        
}

export default Customer;

// <Avatar style ={{width:'200px', height:'200px'}} alt={customersJSON[user].alt} src={customersJSON[user].image} />


