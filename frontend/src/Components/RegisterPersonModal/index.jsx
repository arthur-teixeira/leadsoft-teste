import React from 'react';

import styles from './RegisterPersonModal.module.css'
import PropTypes from 'prop-types'
import { AiOutlineClose } from 'react-icons/ai'
import { useInputValue } from '../../hooks'

const RegisterPersonModal = ({toggle}) => {

  const name = useInputValue("");
  const secondName = useInputValue("");
  const birthDate = useInputValue("");
  const height = useInputValue("");
  const weight = useInputValue("");

  return (
    <>  
      <div className={styles.ModalBackground} onClick={toggle}/>
      <div className={styles.ModalContainer}>
      <form>        
        <button onClick={toggle} className={styles.CloseBtn}>
          <AiOutlineClose size={20}/>
        </button>
        <input type="text" name="name" id="name" placeholder="Nome:" className={styles.FormInput} {...name} />
        <input type="text" name="secondName" id="secondName" placeholder="Sobrenome:" className={styles.FormInput} {...secondName}/>
        <input type="date" name="birthDate" id="birthDate" className={styles.FormInput} {...birthDate}/>
        <div className={styles.FlexContainer}>
          <input type="text" name="height" id="height" placeholder="Altura:" className={styles.FormInputSml} {...height}/>
          <input type="text" name="weight" id="weight" placeholder="Peso:" className={styles.FormInputSml} {...weight}/>
        </div>
        <div className={styles.BtnGroup}>
          <button type="button" className={styles.BtnDanger}>Cancelar</button>
          <button type="submit" className={styles.BtnPrimary}>Salvar</button>
        </div>
      </form>
      </div>
    </>
  );
}

RegisterPersonModal.propTypes = {
  toggle: PropTypes.func.isRequired
}  

export default RegisterPersonModal;
