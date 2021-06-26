import React, { useContext, useEffect } from 'react';

import styles from './RegisterPersonModal.module.css'
import PropTypes from 'prop-types'
import { AiOutlineClose } from 'react-icons/ai'
import { useInputValue } from '../../hooks'
import { PersonHandler, PersonDataContext } from '../../Contexts'
import { Portal } from '../'

const RegisterPersonModal = ({ toggle }) => {

  const name = useInputValue("");
  const secondName = useInputValue("");
  const birthDate = useInputValue("");
  const height = useInputValue("");
  const weight = useInputValue("");

  const isNewPerson = useContext(PersonHandler)[0];
  const personData = useContext(PersonDataContext)[0];

  useEffect(() => {
    if(!isNewPerson){
      console.log(personData)
      name.setValue(personData.name.split(" ")[0])
      secondName.setValue(personData.name.split(" ")[1])
      birthDate.setValue(personData.birthDate)
      height.setValue(personData.height)
      weight.setValue(personData.weight)
    }
  }, [
    isNewPerson,
    personData,
    name,
    secondName,
    birthDate,
    height,
    weight
  ])


  const handleSaveClick = e => { 
    toggle();   
    if(isNewPerson) console.log("Vai salvar");
    else console.log("Vai editar");
  }

  return (
    <Portal>  
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
          <button type="button" className={styles.BtnDanger} onClick={toggle}>Cancelar</button>
          <button type="button" className={styles.BtnPrimary} onClick={handleSaveClick}>Salvar</button>
        </div>
      </form>
      </div>
    </Portal>
  );
}

RegisterPersonModal.propTypes = {
  toggle: PropTypes.func.isRequired
}  

export default RegisterPersonModal;
