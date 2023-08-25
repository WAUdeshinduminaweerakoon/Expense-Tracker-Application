
import './App.css';
import Graph from './components/Graph.jsx';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>Expense Tracker</h1>
        {/* grid columns*/}
        <div className='grid-columns'>
          {/*Chart*/}
          <Graph/>
          {/*from*/}
        </div>
      </div> 
    </div>
  );
}

export default App;
