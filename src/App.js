import logo from './logo.svg';
import './App.css';
import './components/Calendar/style.css';

import Topbar from './components/TopBar.jsx';
import BottomBar from './components/BottomBar.jsx';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import ClientWork from './components/ClientWork.jsx';
import Resume from './components/Resume.jsx';

function App() {
  return (
    <div className="App">
    <Topbar/>
    <AboutMe/>
    <Resume/>
    <Projects/>
    <ClientWork/>
    <BottomBar/>
    </div>
  );
}

export default App;
