import React from 'react';
import { Divider } from 'antd';
import Demo1 from './demo/Demo1';
import Demo2 from './demo/Demo2';
import Demo3 from './demo/Demo3';
import Demo4 from './demo/Demo4';

function Demo() {
    return (
        <div className="container">
            <Demo1></Demo1>
            <Divider></Divider>
            <Demo2></Demo2>
            <Divider></Divider>
            <Demo3></Demo3>
            <Divider></Divider>
            <Demo4></Demo4>
        </div>
    )
}

export default Demo;