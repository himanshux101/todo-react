import React, {FC} from 'react';
import TodoComp from './Todo';

interface Todo {
    id: number,
    data: string,
    checked: boolean,
};

interface TodosProps {
    Todos: Array<Todo>,
    total: number,
    addTodo: (data: string) => void,
    toggleTodoCheckbox: (id: number, check: boolean) => void
    deleteTodo: (id: number) => void
};

const Todos: FC<TodosProps> = ({ 
    Todos, 
    total,
    addTodo, 
    toggleTodoCheckbox,
    deleteTodo
}: TodosProps) => {
    let [data, setData] = React.useState<string>("")

    const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setData(event.target.value)
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        addTodo(data)
        setData("")
    }

    return (
        <div style={{}}>
            <h3>Total: {total}</h3>
            {Todos.map(todo => 
                <TodoComp 
                    key={todo.id} 
                    Todo={todo} 
                    toggleTodoCheckbox={toggleTodoCheckbox}
                    deleteTodo={deleteTodo}
                />
            )}
            
            <form onSubmit={handleFormSubmit} >
                <input type="text" value={data} onChange={handleDataChange} />
            </form>
        </div>
    );
};

export default Todos;