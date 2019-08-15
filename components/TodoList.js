import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import styled from 'styled-components';
import { loadDataAsync } from '../actions';

const Ul = styled.ul`
    column-count: 2;
    @media (min-width: 800px) {
        column-count: 4;
    }
`;

const Li = styled.li`
    align-items: center;
    display:grid;
    font-size: 1.1rem;
    grid-auto-flow: column;
    grid-template-columns: 20px 1fr;
    list-style: none;
    margin: 0;
    padding: 0;
    

    &::before {
        color: var(--badass);
        content: "•";
        font-size:2.3rem;
        padding-right: 8px;
    }
`;

const TodoList = ({todos, dispatch}) => {
    const [todoList, setTodoList] = useState(todos);
    useEffect(()=>{
        setTodoList(todos);
    }, [todos]);

    useEffect(() => {
        dispatch(loadDataAsync());
    },[]);

    return (<>
                <Ul>
                    {
                        todoList.map((todo, index)=><Li key={`todo-${index}`}><Todo {...todo} /></Li> ) 
                    }
                </Ul>
            </>);
}

function mapStateToProps (state) {
    const { todos } = state
    return { todos }
}

export default connect(
    mapStateToProps
)(TodoList)