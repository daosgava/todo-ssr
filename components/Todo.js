import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions';
import styled from 'styled-components';

const TodoText = styled.span`
  vertical-align: super;
`;
const CustomTodoText = styled(TodoText).attrs(({ completed }) => ({
  //textDecoration: completed ? 'line-through' : 'none'
}))`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const Todo = ({ id, text, completed, dispatch }) => {
  const handleCompleteTodo = id => {
    dispatch(removeTodo(id));
  };
  return (
    <>
      <CustomTodoText
        completed={completed}
        onClick={() => handleCompleteTodo(id)}
      >
        {text}
      </CustomTodoText>
    </>
  );
};

export default connect()(Todo);
