import React from "react";
import { BrowserRouter as Router} from 'react-router-dom'
import MainRoute from './MainRoute'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import {Provider} from "react-redux";


function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <PersistGate  persistor={persistor}>
          <Router>
            <MainRoute/>
          </Router>
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
}

export default App;
