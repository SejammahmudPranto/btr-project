import './App.css';
import Navbar from './Components/navbar/Navbar';
import Homepage from './Components/pages/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Homepage/>
      </Navbar>
      <div className='temporary-footer'>
        Designed by Sejan Mahmud Pranto
      </div>
    </div>
  );
}

export default App;
