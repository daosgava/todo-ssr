import { actionTypes } from '../actions/actionTypes';

export const activitiesInitialState = {
  todos: []
};

const reducer = (state = activitiesInitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      let newTodos = [
        ...state.todos,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
      return {
        ...state,
        todos: newTodos
      };
    case actionTypes.LOAD_DATA:
      return {
        ...state,
        todos: action.data
      };
    case actionTypes.COMPLETE_TODO:
      let updatedTodos = [...state.todos];
      return {
        ...state,
        todos: updatedTodos.map(todo =>
          todo.id === action.id
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo
        )
      };
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{
          error: action.error
        }
      };
    default:
      return state;
  }
};

export default reducer;
