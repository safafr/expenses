import React from 'react';
import "./Card.css";

function Card(props) {
    const classes = "card "+props.className
  return (
     <div className={classes}>
      {props.children}
    </div>
  )
}

export default Card
//  {/*ki nji besh na3mel css en comun
//props.children bech thezzz el props mta3 children