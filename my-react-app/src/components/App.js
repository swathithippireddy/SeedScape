// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../routes/routes';
import NavigationBar from './NavigationBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
