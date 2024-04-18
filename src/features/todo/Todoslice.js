import {  createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [],
    updates : []
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state,action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action) => {
            state.todos = state.todos.filter( (todo) => (todo.id !== action.payload) )
        },
        updateTodo : (state,action) => {
            const id = action.payload.id;
            const text = action.payload.text;
            state.todos = state.todos.map((todo) => 
                todo.id === id ? {...todo,text} : todo
            )
        },
        addUpdates : (state,action) => {
            const update = {
                id : action.payload.id,
                text : action.payload.text
            }
            state.updates.push(update)
        },
        clearUpdates : (state) => {
            state.updates = []
        }
    }
})

export const {addTodo,removeTodo,updateTodo,addUpdates,clearUpdates} = todoSlice.actions

export default todoSlice.reducer