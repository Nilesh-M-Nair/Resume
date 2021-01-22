import React from 'react';
import {cardJSON} from '../../data';
import HealthGoal from './HealthGoal';

// const healthgoalcard = {
//   "background-color":"black"
// }

function HealthGoalCard() {
  const cardList = cardJSON.map((card)=> 
      <HealthGoal key={card.id} card ={card} />
    )
    return (
    // <div style={healthgoalcard}>
      <span className="card__container">
        <span className = 'card__heading'>Previously worked on</span>
        <span className = "card__healthcrad">
          {cardList}
        </span>
    </span>
  )
}

export default HealthGoalCard;