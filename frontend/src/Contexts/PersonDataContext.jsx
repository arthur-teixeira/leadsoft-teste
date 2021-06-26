import React, {useState} from 'react';

const PersonDataContext = React.createContext([{}, () => {}])

const PersonDataContextProvider = ({children}) => {
  const [personData, setPersonData] = useState({});
  return (    
    <PersonDataContext.Provider value={[personData, setPersonData]}>{children}</PersonDataContext.Provider>
  );
}

export {PersonDataContext, PersonDataContextProvider};