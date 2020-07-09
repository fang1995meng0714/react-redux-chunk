import React from 'react';
import Demo1 from './demo/Demo1';
import { Divider } from 'antd';
import Demo2 from './demo/Demo2';
import Demo3 from './demo/Demo3';

function Demo() {
    return (
        <div className="container">
            <Demo1></Demo1>
            <Divider></Divider>
            <Demo2></Demo2>
            <Divider></Divider>
            <Demo3></Demo3>
        </div>
    )
}

export default Demo;