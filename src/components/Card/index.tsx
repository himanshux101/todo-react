import React from 'react';

import {
    Card,
    Todo,
    Checkbox,
    DeleteButton
} from './Styled'

interface CardProps {
    data: string;
    checked: boolean;
    handleCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleDelete: () => void;
};

const CardComp: React.FC<CardProps> = ({
    data,
    checked,
    handleCheckbox,
    handleDelete
}: CardProps) =>  (
    <Card>
        <Todo>{data}</Todo>
        <Checkbox checked={checked} onChange={handleCheckbox} />
        <DeleteButton value="Delete" onClick={handleDelete} />
    </Card>
);


export default CardComp;