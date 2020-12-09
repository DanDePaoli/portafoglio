import logo from './logo.svg';
import './App.css';

import Topbar from './components/TopBar.jsx';
import BottomBar from './components/BottomBar.jsx';
import AboutMe from './components/AboutMe.jsx';

function App() {
  return (
    <div className="App">
    <Topbar/>
    <AboutMe/>
    <BottomBar/>
    </div>
  );
}

export default App;
