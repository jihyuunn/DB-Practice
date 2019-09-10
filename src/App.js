import React, { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [todolist, setTodolist] = useState([]);
  useEffect(() => {
    const getList = async () => {
      try {
        const response = await Axios.get(
          " http://localhost:8000/api/todolists"
        );
        console.log(response.data.data);
        setTodolist(response.data.data)
        // setTodolist(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, []);
  const lists = todolist.map((list, index) => <li key={index}>{list.content}</li>);

  // const [todos, setTodos] = useState([])
  // useEffect(() => {
  //   setTodos([todolist.map(list => list.content)])
  //   console.log(todos)
  // }, [])

  const [todoThing, setTodoThing] = useState("")
  const getTodo = e => {
    setTodoThing(e.target.value)
  }
  const addTodo = async () => {
    try {
      const response = await Axios.post(
        " http://localhost:8000/api/todolists",
        { "content":todoThing }
      )
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <ul>{lists}</ul>
      <form>
        <label>todo</label>
        <input value={todoThing} onChange={getTodo}></input>
        <button onClick={addTodo}>add it</button>
      </form>
    </div>
  );
}

export default App;
