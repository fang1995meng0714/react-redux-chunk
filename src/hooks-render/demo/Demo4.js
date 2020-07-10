import React, { useState, useRef  } from 'react';
import { Button, Input } from 'antd';

function Demo4() {
    const [name, setName] = useState("小明");
    const nameRef = useRef();

    const submitInput = () => {
        let value = nameRef.current.state.value;
        setName(value);
    }
    return (
        <div>
            <p>{name}</p>
            <Input ref={nameRef} placeholder="请输入" style={{width: "200px"}}/>
            <Button onClick={submitInput} style={{marginLeft: "20px"}}> 提交 </Button>
            <div style={{margin:"5px 14px"}}>
                hooks: useRef
            </div>
        </div>
    )
}

export default Demo4;