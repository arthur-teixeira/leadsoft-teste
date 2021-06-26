import React from 'react';

import styles from './PersonCard.module.css'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { RiDeleteBin5Line, RiPencilLine } from 'react-icons/ri'
import propTypes from 'prop-types'

const PersonCard = ({personDatapdata}) => {
  const personData = 
  {
    name: "Arthur Teixeira",
    height: 1.50,
    weight: 50,
    id: "1982741982"
  }

  return (    
    <div className={styles.CardWrapper} key={personData.id}>
      <div className={styles.ContentWrapper}>
        <div className={styles.PersonIcon}>
          <IoPersonCircleOutline color="#1558f6"/>
        </div>
        <div className={styles.CardDetails}>
          <div>
          <h2>{personData.name}</h2>       
          <p>Idade: {personData.age}</p>
          <p>Altura: {personData.height}m</p>
          <p>Peso: {personData.weight}kg</p>
          <p>IMC: {(personData.weight / personData.height ** 2).toFixed(1)} </p>
          </div>
        </div>
      </div>
      <div className={styles.CardIcons}>
        <RiPencilLine/>
        <RiDeleteBin5Line color = "#da1515"/>
      </div>      
    </div>      
  );
}

PersonCard.propTypes = {
  personData: propTypes.shape({
    name: propTypes.string.isRequired,
    age: propTypes.number.isRequired,
    height: propTypes.number.isRequired,
    weight: propTypes.number.isRequired
  })
}

export default PersonCard;
