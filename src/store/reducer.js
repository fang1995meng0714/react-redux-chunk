import moment from "moment";
import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, LOGIN } from "./actionTypes";

const defaultState = {
    inputValue: "Write Some",
    todoList: [],
    usernameInfo: {
        isLogin: false,
        username: "",
        password: ""
    }
};

const Reducer = (state = defaultState, action) => {
    if(action.type === LOGIN) {
        console.log(action)
        let usernameInfo = {
            isLogin: true,
            username: action.value.username,
            password: action.value.password
        }
        
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

export default Reducer;