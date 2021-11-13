import './App.css';
import Home from './Home/Home.js';
import Nav from './Nav/Nav.js';
import { GetContext } from './components/useContext/provideTheme';

function App() {
  return (
    <div className="App">
      <GetContext>
        <Nav/>
        <Home/>
      </GetContext>
    </div>
  );
}

export default App;
