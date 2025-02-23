import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Dashboard from './features/dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Dashboard</h1>
        </header>
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;