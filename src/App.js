import React from 'react';

import './assets/css/App.css';

import Sidebar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';
import ContenedorPublicidad from './components/contenedorPublicidad';

function App() {
  return (
    <React.Fragment>
      <div className="App" id="wrapper">
        <Sidebar />
        <ContentWrapper />
        {/*  <ContenedorPublicidad>
        <h2>publicidad 1 que puede ser una img </h2>
      </ContenedorPublicidad>
      <ContenedorPublicidad>
        <h2>publicidad 2 que puede ser una video</h2>
      </ContenedorPublicidad> */}
      </div>
    </React.Fragment>
  );
}

export default App;
