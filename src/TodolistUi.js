import React from 'react';
import { Input, Button, List } from "antd";
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

const TodolistUi = (props) => {
    let { todoList, inputValue, changInputValue, addItem } = props;

    return (
        <div className="container">
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