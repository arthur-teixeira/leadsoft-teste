import './App.css';

import {LoginPage, PersonPage} from './Pages'
import { PersonModalContextProvider, PersonHandlerProvider, PersonDataContextProvider } from './Contexts';

function App() {
  return (
    <PersonModalContextProvider>
      <PersonDataContextProvider>
        <PersonHandlerProvider>
          <PersonPage/>
        </PersonHandlerProvider>
      </PersonDataContextProvider>
    </PersonModalContextProvider>
  );
}

export default App;
