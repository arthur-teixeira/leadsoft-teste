import React from 'react';

import styles from './PersonCardGrid.module.css'

import { PersonCard } from '../'

const PersonCardGrid = () => {
  return (
    <div className={styles.GridWrapper}>
      <PersonCard/>
      <PersonCard/>
      <PersonCard/>
      <PersonCard/>
      <PersonCard/>
      <PersonCard/>
      <PersonCard/>
      <PersonCard/>
      <PersonCard/>
      <PersonCard/>
      <PersonCard/>
      <PersonCard/>
    </div>
  );
}

export default PersonCardGrid;
