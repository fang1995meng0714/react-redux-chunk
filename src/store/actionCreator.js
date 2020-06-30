import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from "./actionTypes";
import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
});

export const addItemAction = () => ({
    type: ADD_ITEM
});

export const delItemAction = (index) => ({
    type: DEL_ITEM,
    index
});

export const getListAction = () => {
    return (dispatch)=>{
        axios.get('http://localhost:3000/data.json').then((res)=>{
            console.log(res);
            let {todoList} = res.data.todoList;
            const action = {
                type: GET_LIST,
                todoList
            };

            dispatch(action);
        })
    }
};