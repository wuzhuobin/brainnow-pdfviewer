import React from 'react';
import './BrainnowPDFViewer.css';
import 'antd/dist/antd.css';
import BrainnowIcon from './asset/brainnow-icon.svg';
import { PageHeader } from 'antd';
import { Button } from 'antd';
import { Row } from 'antd';
import { Col } from 'antd';
import { Slider} from 'antd';

const BUTTON_TEXT_en_us = 'Chinese/中文';
const BUTTON_TEXT_zh_cn = 'English/英文';

export default class BrainnowPDFViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: BUTTON_TEXT_en_us,
      pdf: this.props.pdf_en_us,
      imgIndex: 0
    };
    this.onClickListener = this.onClickListener.bind(this);
    this.onSliderChangeListener = this.onSliderChangeListener.bind(this);
    this.onWheelListener = this.onWheelListener.bind(this);
  }
  render() {
    return (
      <div className="App">
        <PageHeader title={<img src={BrainnowIcon} alt="BrainnowIcon" className="logoImg"></img>}
          extra={<div className="lanBtn"><Button onClick={()=>this.onClickListener()}>{this.state.buttonText}</Button></div>}
        >
        </PageHeader>
        <Row type="flex">
          <Col span={12}><embed className="PDFViewer" src={this.state.pdf} type="application/pdf"></embed></Col>
          <Col span={11} onWheel={this.onWheelListener}>
            <img src={this.props.imgs[this.state.imgIndex]} alt="sample" height="100%" onContextMenu={e => e.preventDefault()}></img>
          </Col>
          <Col span={1} className='slider'><Slider vertical value={this.state.imgIndex} onChange={this.onSliderChangeListener} min={0} max={this.props.imgs.length - 1}></Slider></Col>
        </Row>
      </div>
    );
  }

  onSliderChangeListener(value) {
    this.setState({imgIndex: value});
  }

  onWheelListener(event) {
    let newIndex = this.state.imgIndex;
    newIndex = (event.deltaY > 0) ? newIndex + 1 : newIndex - 1;
    newIndex = Math.min(this.props.imgs.length - 1, newIndex);
    newIndex = Math.max(0, newIndex);
    this.setState({imgIndex: newIndex});
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