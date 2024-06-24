import React, {createContext, useContext, useReducer, useRef} from "react";
import _ from "lodash";

const initialTodos = [
    {
        id: 1,
        text: "할 일 1",
        done: true,
    },
    {
        id: 2,
        text: "할 일 2",
        done: true,
    },
    {
        id: 3,
        text: "할 일 3",
        done: false,
    },
];

const todoReducer = (state, action) => {
    console.log(state);
    let doneList, undoneList = [];
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        case 'DONE':
            // const todoList = [...state];
            // const todoDoneList = JSON.parse(JSON.stringify(state));
            const todoDoneList = _.cloneDeep(state);
            console.log("isEqual ",_.isEqual(state, todoDoneList));
            console.log("DONE ", state);
            console.log("todoDoneList ", todoDoneList);
            doneList = todoDoneList.filter(todo => todo.done);
            return doneList;
        case 'UNDONE':
            // const todoUnDoneList = [...state];
            const todoUnDoneList = _.cloneDeep(state);
            console.log("isEqual ",_.isEqual(state, todoUnDoneList));
            console.log(state === todoUnDoneList, state.length === todoUnDoneList.length);
            // const todoUnDoneList = JSON.parse(JSON.stringify(state));
            console.log("UNDONE ", state);
            console.log("todoUnDoneList ", todoUnDoneList);
            undoneList = todoUnDoneList.filter(todo => !todo.done);
            return undoneList;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    console.log(state);
    const nextId = useRef(4);
    // children ?
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export const useTodoState = () => {
    const context = useContext(TodoStateContext);
    console.log("useTodoState ", context);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export const useTodoDispatch = () => {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export const useTodoNextId = () => {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}