import React, { useContext } from 'react';

import { PersonCardGrid, Header, RegisterPersonModal } from '../../Components';

import { PersonModalContext } from '../../Contexts'

const PersonPage = () => {
  const [on, toggle] = useContext(PersonModalContext)
  return (
    <>
      {on && <RegisterPersonModal toggle={toggle}/>}
      <Header/>
      <PersonCardGrid/>
    </>
  );
}

export default PersonPage;
