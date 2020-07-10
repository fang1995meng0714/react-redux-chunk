import React, { Component } from 'react';
import TodolistUi from './TodolistUi';
import { connect } from "react-redux";
import {store} from "../store";
import { changeInputAction, addItemAction, delItemAction, getListAction } from "../store/actionCreator";

class Todolist extends Component {
  render() {
    return ( 
      <div className="container">
        <TodolistUi
          todoList={this.props.todoList}
          inputValue={this.props.inputValue}
          delItem={this.props.delItem}
          changInputValue={this.props.changInputValue}
          addItem={this.props.addItem}
        />
      </div>
     );
  }

  componentDidMount() {
    const action = getListAction();
    store.dispatch(action); 
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    todoList: state.todoList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changInputValue(e) {
      const action = changeInputAction(e.target.value);
      dispatch(action);
    },
    addItem() {
      const action = addItemAction();
      dispatch(action);
    },

    delItem(index) {
      const action = delItemAction(index);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
