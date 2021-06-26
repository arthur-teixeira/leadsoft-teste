import React from 'react';
import { useToggle } from '../hooks'

const PersonHandler = React.createContext([{}, () => {}])

const PersonHandlerProvider = ({children}) => {
  const [on, toggle] = useToggle(false);
  return (    
    <PersonHandler.Provider value={[on, toggle]}>{children}</PersonHandler.Provider>
  );
}

export {PersonHandler, PersonHandlerProvider};
