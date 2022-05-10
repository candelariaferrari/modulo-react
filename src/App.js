import './assets/css/App.css';

import Sidebar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';

function App() {
  return (
    <div className="App"  id="wrapper">
      <Sidebar/>
      <ContentWrapper/>
    </div>
  );
}

export default App;
