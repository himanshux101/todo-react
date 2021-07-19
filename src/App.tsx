import React, { FC, useEffect } from 'react';
import './App.css';
import TodosComp from "./containers/Todos";

interface Todo {
  id: number,
  data: string,
  checked: boolean,
}

const ThemeContext = React.createContext({ theme: "light", other: {} })

const App: FC = () => {
  const [Todos, setTodos] = React.useState<Array<Todo>>(() => { 
    return [{id: 1, data:"test", checked: false}]; 
  });
  const [Total, setTotal] = React.useState<number>(1);
  const [idx, setIdx] = React.useState<number>(1);


  // use Effect hook

  // gets call when the component mounts
  useEffect(() => {
    console.log("component mounted ..")
  }, []);
  
  // gets call every time the component refreshes
  useEffect(() => {
    console.log("component refreshing ..")
  });

  // gets called when the component unmounts 
  useEffect(() => {
    return () => {
      console.log("component unmounting ..")
    }
  }, []);
  
  // gets called when the idx state changes(only when we add a todo) 
  useEffect(() => {
    console.log("idx state changes ..")
  }, [idx]);


  const addTodo = (data: string): void => {
    setTodos(prev => {
      return [...prev, { id: idx+1, data: data, checked: false}];
    })

    setTotal(prev => prev + 1);
    setIdx(prev => prev + 1);
  }

  const toggleTodoCheckbox = (id: number, check: boolean): void => {
    let todos: Todo[] = Todos.map(todo => {
      if (todo.id === id) {
        return {...todo, checked: check};
      } else { return todo; }
    })

    setTodos(todos);
  }

  const deleteTodo = (id: number): void => {
    let todos: Todo[] = Todos.filter(todo => todo.id !== id);
    setTodos(todos);
    setTotal(prev => prev - 1);
  }

  return (
    <div className="App">
      <TodosComp 
        Todos={Todos} 
        total={Total} 
        addTodo={addTodo} 
        toggleTodoCheckbox={toggleTodoCheckbox} 
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
