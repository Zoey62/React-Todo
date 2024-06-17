import React, {createContext, useReducer} from "react";

const initialTodos = [
    {
        id: 1,
        text: "할 일 1",
        checked: true,
    },
    {
        id: 2,
        text: "할 일 2",
        checked: true,
    },
    {
        id: 3,
        text: "할 일 3",
        checked: false,
    },
];

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export const TodoProvider = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}