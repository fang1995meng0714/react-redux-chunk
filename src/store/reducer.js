import moment from "moment";
import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, LOGIN } from "./actionTypes";

const defaultState = {
    inputValue: "Write Some",
    todoList: [],
    usernameInfo: {
        loginSuccess: window.sessionStorage.getItem("loginSuccess") || false,
        username: "",
        password: ""
    }
};

export default (state = defaultState, action) => {
    if(action.type === LOGIN) {
        let usernameInfo = {
            loginSuccess: true,
            username: action.value.username,
            password: action.value.password
        }
        window.sessionStorage.setItem("loginSuccess", true);
        return {...state, usernameInfo};
    }

    if(action.type === CHANGE_INPUT) {
        return {...state, inputValue: action.value}
    }

    if(action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        let obj = {
            date: moment().format('YYYY/MM/DD HH:mm:ss'),
            content: newState.inputValue
        };
        
        newState.todoList.push(obj);
        newState.inputValue = "";

        return newState;
    }

    if(action.type === DEL_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        let {index} = action;
        newState.todoList.splice(index, 1);
    
        return newState;
    }

    return state;
}
