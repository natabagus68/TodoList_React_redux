import Todo from './components/to_do/Todo'
import ListTask from './components/list_task/ListTask'
import ListDone from './components/list_done/ListDone';
import './App.css'
function App() {
  return (
    <div className="App">
       <Todo />
       <ListTask />
       <ListDone />
    </div>
  );
}

export default App;
