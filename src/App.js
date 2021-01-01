import logo from './logo.svg';
import './App.css';
import './components/Calendar/style.css';

import Topbar from './components/TopBar.jsx';
import BottomBar from './components/BottomBar.jsx';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import ClientWork from './components/ClientWork.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="App">
    <Topbar/>
    <AboutMe/>
    <Resume/>
    <Projects/>
    <ClientWork/>
    <Contact/>
    <BottomBar/>
    </div>
  );
}

export default App;

