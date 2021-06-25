import React from 'react';
import { useToggle } from '../../hooks'

import { LoginModal, RegisterPersonModal } from '../../Components'

const LoginPage = () => {
  const [open, toggle] = useToggle(false)
  return (
    <>
      <LoginModal/>      
      {open && <RegisterPersonModal toggle={toggle}/>}      
      <button onClick={toggle}>teste</button>
    </>
  );
}

export default LoginPage;
