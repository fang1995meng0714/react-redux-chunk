import React, { useReducer } from 'react';
import { Button } from 'antd';
const initialState = {
    count:1
}

function reducer(state, action) {
    switch(action.type) {
        case "increment" :
            return { count: state.count + action.payload };
        case "decrement": 
            return { count: state.count - action.payload };
        default:
            return state;
    }
}

function Demo3() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <Button type="primary" onClick={() => {
                dispatch({type: "increment", payload: 5})
            }}> + </Button>
            <span style={{margin: "10px"}}>{state.count}</span>
            <Button onClick={() => {
                dispatch({type: "decrement", payload: 3})
            }}> - </Button>
             <div style={{margin:"5px 14px"}}>
                hooks: useReducer
            </div>
        </div>
    )
}

export default Demo3;