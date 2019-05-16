import React from 'react';
import './BrainnowPDFViewer.css';
import 'antd/dist/antd.css';
import BrainnowIcon from './asset/brainnow-icon.svg';
import { PageHeader } from 'antd';
import { Button } from 'antd';
import { Table } from 'antd';
import { Row } from 'antd';
import { Col } from 'antd';

const BUTTON_TEXT_en_us = 'Chinese/中文';
const BUTTON_TEXT_zh_cn = 'English/英文';

export default class BrainnowPDFViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: BUTTON_TEXT_en_us,
      pdf: this.props.pdf_en_us
    };
    console.log(this.state);
  }
  render() {
    const columns = [{
      title: 'img',
      dataIndex: 'img',
      align: 'center'
    }];
    const dataSource = this.props.imgs.map((value, index) => {
      return {
        key: index,
        img: <img src={value} alt="logo" onContextMenu={e => e.preventDefault()}></img>
      };
    });

    return (
      <div className="App">
        <PageHeader title={<img src={BrainnowIcon} alt="BrainnowIcon" className="logoImg"></img>}
          extra={<div className="lanBtn"><Button onClick={()=>this.onClickListener()}>{this.state.buttonText}</Button></div>}
        >
        </PageHeader>
        <Row type="flex">
          <Col span={12}><embed className="PDFViewer" src={this.state.pdf} type="application/pdf"></embed></Col>
          <Col span={12}>
            <Table className="JPGViewer" showHeader={false} pagination={false} columns={columns} dataSource={dataSource} scroll={{ y: '91vh' }}></Table>
          </Col>
        </Row>
      </div>
    );
  }

  onClickListener() {
    if(this.state.buttonText === BUTTON_TEXT_en_us) {
      this.setState({ 
        buttonText: BUTTON_TEXT_zh_cn,
        pdf: this.props.pdf_zh_cn
      });
    }
    else {
      this.setState({ 
        buttonText: BUTTON_TEXT_en_us,
        pdf: this.props.pdf_en_us
      });
    }
  }
}

BrainnowPDFViewer.defaultProps = {
  imgs:[],
  pdf_en_us: null,
  pdf_zh_cn: null
};