import React from 'react';
import AddTodo from '../components/AddTodo';
import MyTitle from '../components/MyTitle';
import TodoList from '../components/TodoList';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4,auto);
  justify-items:stretch;
`;

const Index = ()=>(
  <>
    <MainContainer>
      <MyTitle />
      <AddTodo />
      <TodoList />
    </MainContainer> 
  </>
);

export default Index;
