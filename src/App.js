import React from 'react';
// import test0 from './asset/512x512.jpg';
// import test1 from './asset/1024x1024.jpg';
// import pdf_en_us from './asset/I am pdf en-us.pdf';
// import pdf_zh_cn from './asset/I am pdf zh-cn.pdf';
import pdf_en_us from './asset/BN-DG-S100006_5cc7fc05784ac2385bdac52c_En.pdf';
import pdf_zh_cn from './asset/BN-DG-S100006_5cc7fc05784ac2385bdac52c_Zh.pdf';
import BrainnowPDFViewer from './BrainnowPDFViewer';
const imgs = [];
for (let i = 0; i < 16; ++i) {
  imgs.push(require('./asset/AxialOverlay' + i.toString() + '.jpg'));
}

export default function App() {
  return (
    <BrainnowPDFViewer pdf_en_us={pdf_en_us} pdf_zh_cn={pdf_zh_cn} imgs={imgs}></BrainnowPDFViewer>
  );
};