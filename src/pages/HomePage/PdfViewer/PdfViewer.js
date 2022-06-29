import React from "react";
import "./PdfViewer.scss";
import Demo from "./Grid/Demo";

const PdfViewer = () => {
  return (
    <div>
      <div className="PdfViewer_conatiner">
        <Demo />
        {/* <div className='PdfViewer_info'>
            <h1>PDF Viewer - Dashboard - Free Product</h1>
            <h3>Customers online copy - Consists of a drawing, estimate and a complete vaastu report.</h3>
            </div>
            <div className='PdfViewer_content'>
                <h2>File coming soon.</h2>
            </div> */}
      </div>
    </div>
  );
};

export default PdfViewer;
