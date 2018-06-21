import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.li`
list-style: none;
border-bottom: 1px solid #737B46;
margin-bottom: 13px;
`
const Input = styled.input`
background-color: white;
border: 1px solid #737B46;
border-radius: 4px;
width: 32px;
height: 32px;
cursor: pointer;
-webkit-appearance: none;
appearance: none;
`
const Title = styled.h2`
font-size: 16px;
color: #737B46;
text-align: left;
line-height: 32px;
font-family: PingFangTC-Regular;
font-weight: 100;
`
const Button = styled.button`
background: #737B46;
border: 1px solid #737B46;
border-radius: 4px;
height: 32px;
padding: 8px 20px;
color: white;
font-size: 16px;
text-align: left;
line-height: 16px;
font-weight: 100;
margin-bottom: 14px;
`

const Task = (props) => {
  return (
    <Container>
      <Input type="checkbox"></Input>
      <Title>Task {props.index}</Title>
      <Button>del</Button>
    </Container>
  );
};

export default Task;