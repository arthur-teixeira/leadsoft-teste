import React, {useContext} from 'react';

import styles from './Header.module.css'
import logo from '../../images/logo_white.png'

import { PersonModalContext, PersonHandler } from '../../Contexts'


const Header = () => {
  const toggle = useContext(PersonModalContext)[1];
  const setPersonHandler = useContext(PersonHandler)[1];

  const handleClick = async e => {
    await setPersonHandler(true);
    toggle();
  }

  return (
    <div className={styles.Header}>
      <div className={styles.HeaderContent}>        
        <img src={logo} className = {styles.Logo} />
        <div>
          <button className={styles.Button} onClick={handleClick}>Cadastrar nova pessoa</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
