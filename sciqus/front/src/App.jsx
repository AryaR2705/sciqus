import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container1 from './components/Container1';
import Container2 from './components/Container2';
import Container3 from './components/Container3';
import Container4 from './components/Container4';
import Container5 from './components/Container5';
import Container6 from './components/Container6';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="containers">
          <div className="top-row">
            <Container1 />
            <Container2 />
            <Container3 />
          </div>
          <div className="bottom-row">
            <Container4 />
            <Container5 />
            <Container6 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
