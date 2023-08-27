
import './App.css';
import Graph from './components/Graph.jsx';
import Form from './components/Form';

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
          <Form/>
        </div>
      </div> 
    </div>
  );
}

export default App;
