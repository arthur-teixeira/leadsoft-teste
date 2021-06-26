import React from 'react';
import { useToggle } from '../hooks'

const PersonModalContext = React.createContext([{}, () => {}])

const PersonModalContextProvider = ({children}) => {
  //quando estiver false, o objeto do modal será enviado para a API como um put, quando estiver true, como um post
  const [on, toggle] = useToggle(false);
  return (    
    <PersonModalContext.Provider value={[on, toggle]}>{children}</PersonModalContext.Provider>
  );
}

export {PersonModalContext, PersonModalContextProvider};
