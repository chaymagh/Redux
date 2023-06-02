import './App.css';
import Addtask from './components/Addtask';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="App">
      <div className="add-task"><Addtask/></div>
      <div className="tasks-box"><ListTask/></div>
    </div>
  );
}

export default App;
