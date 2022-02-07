
import './App.css';
import { Games } from './components/game';
import { Output } from './components/output';




function App() {
  
  return (
    <div className="App">
    <div className="input">
    <Games/>
    </div>

    <div className="output">
      <Output/>
    </div>
    </div>
  );
}


 

export default App;
