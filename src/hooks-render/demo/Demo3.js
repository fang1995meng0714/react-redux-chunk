import React, {useState, useEffect, useRef } from 'react';
import { Button } from 'antd';

function Demo3() {
    const [value, setValue] = useState(0);
    const timer = useRef(0);

    useEffect(() => {
        return () => {
            window.clearTimeout(timer);
        }
    });

    function dealClick() {
        timer.current = window.setTimeout(() => {
            setValue(100);
        }, 5000);
    }

    return (
        <div>
            <span>Value is {value}</span>
            <Button onClick={dealClick}>Click Me!</Button>
        </div>
    )
}

export default Demo3;