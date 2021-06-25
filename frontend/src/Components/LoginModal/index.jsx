import React from 'react';

import Logo from '../../images/img3.png'

import styles from './LoginModal.module.css'

const LoginModal = () => {  
  
  return (
    <div className={styles.LoginModalContainer}>
      <form className={styles.Form}>
        <div>
          <img src={Logo} alt="" className={styles.Logo}/>
        </div>
          <input type="email" name="email" id="email" placeholder="Email:" className={styles.FormInput}/>        
          <input type="password" name="password" id="password" placeholder="Senha:" className={styles.FormInput}/>
        <button className={styles.BtnPrimary} type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginModal;
