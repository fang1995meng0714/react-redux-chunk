import React, {useState } from 'react';
import { Button } from 'antd';
import { useEffect } from 'react';
let timer = null;

function Demo2() {
    const [count, setCount] = useState(7);

    useEffect(() => {
        document.title = count;
    }, [count]);

    useEffect(() => {
        timer = setInterval(() => {
            setCount(count + 1);
        }, 1000);

        return () => {
            document.title = "componentWillUnmount";
            clearInterval(timer);
        }
    })

    return (
        <div>
            Count: {count}
            <Button onClick={() => {
                clearInterval(timer); 
            }} style={{marginLeft: "20px"}}> 清除 </Button>
            <div style={{margin:"5px 14px"}}>
                hooks: useEffect
            </div>
        </div>
    )
}

export default Demo2;