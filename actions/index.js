import { actionTypes } from './actionTypes';

let nextTodoId = 0;
export const addTodo = (text) => {
    return { type: actionTypes.ADD_TODO, text, id: nextTodoId++};
}

export const addTodoAsync = (text) => {
    return { type: actionTypes.ADD_TODO_ASYNC, text };
}

export const loadData = (data) => {
    const wrapper = data.map(elem=>({text:elem.name, id: nextTodoId++, completed: false}));
    return { type: actionTypes.LOAD_DATA, data: wrapper };
}

export const loadDataAsync = () => {
    return { type: actionTypes.LOAD_DATA_ASYNC };
}
  
export const removeTodo = (id) => {
    return { type: actionTypes.COMPLETE_TODO, id };
}

export const failure = (err) => {
    return { type: actionTypes.FAILURE , err };
}