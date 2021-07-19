import styled from 'styled-components';

export const Card = styled.div`
    flex: 1;
    flex-direction: row;
`;

export const Todo = styled.span`
    margin-bottom: auto;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`

`;

export const DeleteButton = styled.input.attrs({ type: 'button' })``;