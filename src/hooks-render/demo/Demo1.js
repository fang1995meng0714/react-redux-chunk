import React, { useState, createContext, useContext } from 'react';
import { Button } from 'antd';
const Context = createContext();

function Item1() {
    const count = useContext(Context);
    return(
        <span style={{margin: "10px"}}>{count}<Item2></Item2></span>
    )
}

function Item2() {
    const count = useContext(Context);
    return(
        <span style={{margin: "10px"}}>{count}</span>
    )
}

function Demo1() {
    const [count, setCount] = useState(0);
    
    return (
        <div className="container">
            <Button type="primary" onClick={() => setCount(count + 1)}> + </Button>
            <span style={{margin: "10px"}}>{count}</span>
            <Button  onClick={() => setCount(count - 1)}> - </Button>
            <Context.Provider value={count}>
                <Item1></Item1>
            </Context.Provider>
            <div style={{margin:"5px 14px"}}>
                hooks: useState/ createContext/ useContext
            </div>
        </div>
    )
}

export default Demo1;