import './App.css'
import { useState } from 'react';

interface Task{
  id: number;
  title: string;
  done: boolean;
}

const tasks_start: Task[] = [
  {id: 1, title: "Upiec ciasto", done: false},
  {id: 2, title: "Zdac matme", done: false},
  {id: 3, title: "Nakarmic ksieciunia ", done: true}
];


function App(){
  const [tasks, setTasks] = useState(tasks_start);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskSearch, setTaskSearch] = useState("");
  const [taskFilter, setTaskFilter] = useState("all");
  const [taskSort, setTaskSort] = useState("original");
  const [nextId, setNextId] = useState(4);

  function handleTaskClick(id: number){
    setTasks(tasks.map((task)=> {
      if (task.id=== id) return {...task, done: !task.done};
      return task;
    }));
  }

  function addTask(){
    const title=taskTitle.trim();
    if (title=== "") return;

    setTasks([...tasks, {id: nextId, title: title, done: false}]);
    setNextId(nextId + 1);

    setTaskTitle("");
  }



  function deleteTask(id: number){
    setTasks(tasks.filter((task)=> task.id !== id));
  }

  const tasks_left= tasks.filter((task)=> !task.done).length;
  const tasks_found= tasks.filter((task)=> {
    if (taskFilter=== "done" && !task.done) return false;
    if (taskFilter=== "notDone" && task.done) return false;
    return task.title.toLowerCase().includes(taskSearch.toLowerCase());
  });

  if (taskSort=== "title") tasks_found.sort((a,b)=> a.title.localeCompare(b.title, "pl"));
  if (taskSort=== "status") tasks_found.sort((a,b)=> Number(a.done)- Number(b.done));

  return(
    <div className="lista-zadan">
      <h1>Lista zadan</h1>
      <p>niewykonane: {tasks_left}</p>

      <div className="opcje">
        <label>nowe zadania: <input type="text" placeholder="Wpisz zadanie"
          value={taskTitle} onChange={(e)=> setTaskTitle(e.target.value)} /></label>
        <button onClick={addTask}>dodaj</button>
      </div>

      <div className="opcje"
      >
        <label>Filtr: <select value={taskFilter} onChange={(e)=> setTaskFilter(e.target.value)}>
          <option value="all">Wszystkie</option>
          <option value="done">Wykonane</option>
          <option value="notDone">Niewykonane</option>
        </select></label>

        <label>Sortowanie: <select value={taskSort} onChange={(e)=> setTaskSort(e.target.value)}>
          <option value="original">Oryginalnie</option>
          <option value="title">alfabetycznie</option>
          <option value="status">najpierw wykonane</option>
        </select></label>
      </div>

      <div className="opcje">
        <label>Szukaj: <input type="text" placeholder="Wpisz tytuł"
          value={taskSearch} onChange={(e)=> setTaskSearch(e.target.value)} /></label>
        <button onClick={()=> setTasks(tasks.filter((task)=> !task.done))}>usunwykonane</button>
      </div>

      {tasks_found.length === 0 && <p>ni ma zadan</p>}
      <ul>

        {tasks_found.map((task)=> (
          <li key={task.id}>
            <label>
              <input type="checkbox" checked={task.done} onChange={()=> handleTaskClick(task.id)} />
              {task.title} - {task.done ? "wykonane" : "niewykonane"}
            </label>
            <button onClick={()=> deleteTask(task.id)}>Usun</button>
          </li>
        ))}
        
      </ul>
    </div>
  );
}
export default App
