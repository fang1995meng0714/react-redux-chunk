import React, { Component } from 'react';
import { Menu, message } from 'antd';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import Todolist from './todolist/Todolist';
import {  PieChartOutlined, DesktopOutlined, ContainerOutlined } from '@ant-design/icons';
import Demo from './hooks-render/Demo';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
        };
    }

    info = () => {
        message.info('暂未开放');
    };
    
    render() {
        let pathname = this.props.location.pathname || "";
        let selectedKeys = pathname === "/todolist" 
            ? "1" : pathname === "/hooks" ?
            "2" : "1";
        
        return ( 
        <div id="app-container">
            <div className="content-left">
                <Menu
                selectedKeys={[selectedKeys]}
                mode="inline"
                theme="light"
                inlineCollapsed={this.state.collapsed}
                style={{height: "100%"}}
                >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link  to='/todolist'>class + redux </Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        <Link  to='/hooks'>react hooks </Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined/>}  onClick={this.info}>
                        Tyepscript + hooks
                    </Menu.Item>
                </Menu>
            </div> 
            
            <div className="content-right">
                <Redirect path="/" exact={true} to="/todolist" />
                <Route exact path="/todolist" component={Todolist}/>
                <Route exact path="/hooks" component={Demo}/>
            </div> 
        </div>
       );
    }

    
}

export default withRouter(App)