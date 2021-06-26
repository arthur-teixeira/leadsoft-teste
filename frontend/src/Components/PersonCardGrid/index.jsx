import React from 'react';

import styles from './PersonCardGrid.module.css'

import { PersonCard } from '../'

const PersonCardGrid = () => {

  const peopleData = [
    {
      name: "Arthur Teixeira",
      age: 18,
      weight: 50,
      height: 1.8,
      id: "ijahsdfkah2891734"
    },
    {
      name: "Arthur Carvalho",
      age: 18,
      weight: 50,
      height: 1.8,
      id: "kajshfnkjszhg"
    },
    {
      name: "Julia Kalil",
      age: 17,
      weight: 50,
      height: 1.8,
      id: "huçlghuklg"
    },
    {
      name: "Angelita",
      age: 50,
      weight: 80,
      height: 1.7,
      id: "wa13125515"
    },
    {
      name: "Arthur Teixeira",
      age: 18,
      weight: 50,
      height: 1.8,
      id: "asday34723"
    },
  ]

  return (
    <div className={styles.GridWrapper}>
      {peopleData.map(personData => <PersonCard personData={personData} key={personData.id}/>)}
    </div>
  );
}

export default PersonCardGrid;
