import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Task from './Task';
import './global';

const Header = styled.h1`
margin-bottom: 25px;
font-family: PingFangTC-Semibold;
font-size: 24px;
color: #737B46;
text-align: left;
line-height: 32px;
`
const TaskList = styled.ol`
padding: 0;
margin: 0;
`
const Container = styled.div`
background-color: #E9E7DA;
height: 100%;
padding: 29px;
margin: 0;
border-radius: 4px;
`

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [1,2,3,4],
    }
    this.AddTask = this.AddTask.bind(this);
  }
  AddTask(event) {
    if (event.key == 'Enter') {
      this.setState({
        tasks: [...this.state.tasks, event.target.value]
      })
      event.target.value = '';
    }
  }
  render() {
    return (
      <Container>
        <Header>
          {new Date().toString()}
        </Header>
        <Input AddTask={this.AddTask}></Input>
        <TaskList>
          {this.state.tasks.map((d,i)=><Task key={d+i} index={d}/>)}
        </TaskList>
      </Container>
    );
  }
}

export default App;
