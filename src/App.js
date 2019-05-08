import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import PageHeader from 'antd/lib/page-header'
import Button from 'antd/lib/button';
import BrainnowIcon from './asset/brainnow-icon.svg';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PageHeader title={<img src={BrainnowIcon} alt="BrainnowIcon" className="logoImg"></img>}
          extra={<Button className="lanBtn">Chinese/中文</Button>}
        >
        </PageHeader>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
