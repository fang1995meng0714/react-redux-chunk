import React from 'react';
import { Input, Button, List, Divider  } from "antd";
import PropTypes from 'prop-types';

const TodolistUi = (props) => {
    let { todoList, inputValue, changInputValue, addItem } = props;

    return (
        <div className="container">
          <p>
            react传统的class写法和redux,react-redux, 主要有增删功能, 组件对应文件夹在tradition, 包含todoList为容器组件, todoListUi为ui组件,store为reudx的业务逻辑
          </p>
          <Divider></Divider>
          <div>
            <Input 
              style={{width: "326px", marginRight: "10px"}}
              placeholder="请填写内容"
              onChange={changInputValue}
              value={inputValue}
              />
            <Button type="primary" onClick={addItem}>添加</Button>
          </div>
          <div>
            <List
              style={{width: "400px", marginTop: "20px"}}
              itemLayout="horizontal"
              dataSource={todoList}
              bordered
              renderItem={(item, index) => (
                <List.Item
                  style={{cursor:"pointer"}}
                  onClick={() => props.delItem(index)}>
                  <List.Item.Meta
                    title={item.date}
                    description={item.content}
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
       );
}

TodolistUi.propTypes = {
    todoList: PropTypes.array,
    addItem: PropTypes.func,
    delItem: PropTypes.func,
    changInputValue: PropTypes.func,
    inputValue: PropTypes.string.isRequired
}
 
export default TodolistUi;