import { createSlice } from '@reduxjs/toolkit';

let no = 5
const initialState = {
    text:'아무개',
    todos: [
        {id:1, text:'일요일입니다.', isChk: false },
        {id:2, text:'친구만나기', isChk: false },
        {id:3, text:'저녁먹기', isChk: true },
        {id:4, text:'잠자기', isChk: false },
    ]
}
export const todoSlice= createSlice({
    name:'todos' ,
    initialState ,
    reducers: {
        onDel: (state, action) => {    
            state.todos = state.todos.filter( todo => todo.id !== action.payload )        
        },               
        onAdd: (state, action) => {   
            state.todos  = [
                ...state.todos , 
                {
                    id:no++,
                    text : action.payload,
                    isChk : false 
                }
            ]         
        },               
        onToggle: (state, action) => {      
           state.todos = state.todos.map( todo => todo.id === action.payload ? {...todo, isChk: !todo.isChk} : todo )       
        },               
        changeInput: (state, action) => {  
             state.text  = action.payload         
        }               
    }
})

export const { onDel,onAdd,onToggle,changeInput } = todoSlice.actions;
export default todoSlice.reducer