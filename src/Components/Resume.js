import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { BsDownload } from "react-icons/bs";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setError('');
  };

  const onDocumentLoadError = (err) => {
    console.error("PDF Load Error:", err.message);
    setError("❌ Failed to load PDF file.");
  };

  return (
    <div className="ResumePage" style={{ textAlign: 'center', padding: '20px' }}>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <Document
          file="/Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
        >
          <Page pageNumber={1} scale={width < 700 ? (width > 475 ? 0.7 : 0.5) : 1} />
        </Document>
      )}

      <a href="/Resume.pdf" download="Dhairya_Resume.pdf" target="_blank" rel="noopener noreferrer">
        <button type="button" style={{
          backgroundColor: "#6C3FC9",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "10px 20px",
          marginTop: "20px",
          cursor: "pointer"
        }}>
          <BsDownload /> &nbsp; <strong>Download CV</strong>
        </button>
      </a>
    </div>
  );
};

export default Resume;
