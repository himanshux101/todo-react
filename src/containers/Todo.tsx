import React, { useEffect } from 'react';
import Card from '../components/Card/index';

interface Todo {
    id: number,
    data: string,
    checked: boolean,
};

interface Props {
    Todo: Todo,
    toggleTodoCheckbox: (id: number, check: boolean) => void
    deleteTodo: (id: number) => void
};

const TodoComp: React.FC<Props> = ({ 
    Todo,
    toggleTodoCheckbox,
    deleteTodo
}: Props) => {
    const [check, setCheck] = React.useState<boolean>(Todo.checked)

    const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCheck(event.target.checked)
        toggleTodoCheckbox(Todo.id, event.target.checked)
    }

    useEffect(() => {
        return () => {
          console.log("component unmounting ..")
        }
    }, []);

    return (
        <Card 
            data={Todo.data} 
            checked={check} 
            handleDelete={() => deleteTodo(Todo.id)}
            handleCheckbox={handleCheckbox}
        >
        </Card>
    );
};

export default TodoComp;