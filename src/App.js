import React from 'react';
import logo from './asset/logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import PageHeader from 'antd/lib/page-header'
import Button from 'antd/lib/button';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row'
import BrainnowIcon from './asset/brainnow-icon.svg';
import PDFTest from './asset/C2-Glossary.pdf';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PageHeader title={<img src={BrainnowIcon} alt="BrainnowIcon" className="logoImg"></img>}
          extra={<div className="lanBtn"><Button >Chinese/中文</Button></div>}
        >
        </PageHeader>
        <Row type="flex">
          <Col span={12}><embed className="PDFViewer" src={PDFTest} type="application/pdf"></embed></Col>
          <Col span={12}><img className="JPGViewer" src={logo} alt="logo"></img></Col>
        </Row>
      </div>
    );
  }
}

export default App;
