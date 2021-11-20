import React from 'react';
import { Route } from 'react-router'
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import Main from './view/index'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/index" element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
