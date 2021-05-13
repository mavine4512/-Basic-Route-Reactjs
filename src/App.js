import React from 'react';
import {Router} from 'react-router-dom'
import Routes from "./components/Routes";
import history from "./components/pages/services/history";

function App() {
  return (
    <div className="App">
     <Router history={history}>
         <Routes/>
     </Router>
    </div>
  );
}

export default App;
