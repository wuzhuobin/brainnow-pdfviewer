import React from 'react';
import test0 from './asset/512x512.jpg';
import test1 from './asset/1024x1024.jpg';
import pdf_en_us from './asset/I am pdf en-us.pdf';
import pdf_zh_cn from './asset/I am pdf zh-cn.pdf';
import BrainnowPDFViewer from './BrainnowPDFViewer';

export default function App() {
  return (
    <BrainnowPDFViewer pdf_en_us={pdf_en_us} pdf_zh_cn={pdf_zh_cn} imgs={[test0, test1]}></BrainnowPDFViewer>
  );
};