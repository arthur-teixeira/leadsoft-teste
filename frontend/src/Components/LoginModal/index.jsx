import React from 'react';

import Logo from '../../images/img3.png'
import styles from './LoginModal.module.css'
import { useInputValue } from '../../hooks'

const LoginModal = () => {  

  const email = useInputValue("");
  const password = useInputValue("");
  
  return (
    <div className={styles.LoginModalContainer}>
      <form className={styles.Form}>
        <div>
          <img src={Logo} alt="" className={styles.Logo}/>
        </div>
          <input type="email" name="email" id="email" placeholder="Email:" className={styles.FormInput} {...email}/>        
          <input type="password" name="password" id="password" placeholder="Senha:" className={styles.FormInput} {...password}/>
        <button className={styles.BtnPrimary} type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginModal;
