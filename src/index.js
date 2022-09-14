import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from './firebase/config'
import { FirebaseContext } from './Store/FirebaseContext'
import Context from './Store/FirebaseContext'

ReactDOM.render(
<FirebaseContext.Provider value={{firebase}}>
    <Context>     
      <App />
    </Context>
</FirebaseContext.Provider>
, document.getElementById('root'));
