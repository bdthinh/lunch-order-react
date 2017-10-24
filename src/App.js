import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import Layout from './Layout';

const today = new Date().toISOString().slice(0, 10);

const App = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lunch order with React</h1>
        </header>
        <p className="App-intro">
          Today is {today}
        </p>
        <Layout />
      </div>
    </MuiThemeProvider>
  </Provider>
);

export default App;
