import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
margin-bottom: 16px;
background: #FFFFFF;
border: 2px solid #737B46;
border-radius: 4px;
height: 48px;
width: 100%;
font-family: PingFangTC-Regular;
font-size: 24px;
color: #E9E7DA;
text-align: left;
line-height: 32px;
`
class Input extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <StyledInput placeholder="My new task" onKeyPress={this.props.AddTask}>
      </StyledInput>
    );
  }
}

export default Input;