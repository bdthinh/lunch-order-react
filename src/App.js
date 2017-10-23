import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import logo from './logo.svg';
import './App.css';
import Name from './components/Name';

const today = new Date().toISOString().slice(0, 10);

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Lunch order with React</h1>
      </header>
      <p className="App-intro">
        Today is {today}
        <Name />
      </p>
    </div>
  </MuiThemeProvider>
);

export default App;
