import Navbar from './components/Navbar';
import Header from './components/Header';
import Mainlogo from './components/Mainlogo';
import Subject from './components/Subject'; 
import Menu from './components/Menu'; exerc

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Mainlogo/>
      <Subject/> 
      <Menu/>
    </div>
  );
}

export default App;
