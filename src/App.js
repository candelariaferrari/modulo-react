import React from 'react';

import './assets/css/App.css';

import Sidebar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';



function App() {
  return (
    <React.Fragment>
      <div className="App" id="wrapper">
       <Sidebar />
        <ContentWrapper/>
      </div>
      
    </React.Fragment>
  );
}

export default App;
