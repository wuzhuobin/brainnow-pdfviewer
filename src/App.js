import React from 'react';
import test0 from './asset/test0.jpg';
import test1 from './asset/test1.jpg';
import './App.css';
import 'antd/dist/antd.css';
import PageHeader from 'antd/lib/page-header'
import BrainnowIcon from './asset/brainnow-icon.svg';
import PDFTest from './asset/C2-Glossary.pdf';
// import { PageHeader } from 'antd';
import { Button } from 'antd';
import { Table } from 'antd';
import { Row } from 'antd';
import { Col } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
    this.imgs = [test0, test1];
  }
  render() {
    const columns = [{
      title: 'img',
      dataIndex: 'img'
    }];
    const dataSource = this.imgs.map((value, index) => {
      return {
        key: index,
        img: <img src={value} alt="logo" onContextMenu={e => e.preventDefault()}></img>
      }
    });
       
    return (
      <div className="App">
        <PageHeader title={<img src={BrainnowIcon}  alt="BrainnowIcon" className="logoImg"></img>}
          extra={<div className="lanBtn"><Button >Chinese/中文</Button></div>}
        >
        </PageHeader>
        <Row type="flex">
          <Col span={12}><embed className="PDFViewer" src={PDFTest} type="application/pdf"></embed></Col>
          <Col span={12}>
            <Table className="JPGViewer" showHeader={false} pagination={false} columns={columns} dataSource={dataSource} scroll={{y: '91vh'}}></Table>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
