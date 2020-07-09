import React, { Component } from 'react';
import { Menu } from 'antd';
import { Route, Link } from 'react-router-dom';
import Todolist from './tradition/Todolist';
import {  PieChartOutlined, DesktopOutlined, ContainerOutlined } from '@ant-design/icons';

export default class App extends Component {
    state = {
        collapsed: false,
    };
    render() {
      return ( 
        <div id="app-container">
            <div className="content-left">
                <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="light"
                inlineCollapsed={this.state.collapsed}
                style={{height: "100%"}}
                >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link  to='/'>class + redux </Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        react-hooks
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined />}>
                        Tyepscript + hooks
                    </Menu.Item>
                </Menu>
            </div> 
            <div className="content-right">
                <Route exact path="/" component={Todolist}/>  
            </div> 
        </div>
       );
    }
}