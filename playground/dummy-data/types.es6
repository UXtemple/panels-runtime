import { ActionBlock as Action, ImageBlock as Image, TitleBlock as Title } from 'panels-blocks';
import { connect } from 'redux/react';
import { Panel } from 'panels-ui';
import i from 'seamless-immutable';
import React, { Component, PropTypes } from 'react';

@connect(({counter}) => ({counter}))
class UsePanelsHome {
  render() {
    const { dispatch, width } = this.props;
    const add = () => dispatch({type: 'USEPANELS:ADD', number: 1});
    const substract = () => dispatch({type: 'USEPANELS:SUBSTRACT', number: 1});

    return (
      <Panel style={style.panel} width={width}>
        <Image title='Private beta' src='https://b8d246d71f5fc00a53a1-2fc1a81448061dd0231bdad3c041874d.ssl.cf1.rackcdn.com/cb6034ba-5c3d-42f4-b45c-9fddfe017d3d/fbf0d8f8899b1b85c6ba5c49ad40ecca/original.svg' style={style.image} />
        <Title style={style.title}>Functional web editing experience with a futuristic twist.</Title>
        <Action href='http://runtime.usepanels.com.dev:3000/' style={style.firstAction}>Runtime</Action>
        <Action href='more-stuff/' style={style.action}>More stuff</Action>
        <p>stuff</p>
        <div>{`Count is ${this.props.counter}`}</div>
        <button style={style.button} onClick={add}>+1</button>
        <button style={style.button} onClick={substract}>-1</button>
      </Panel>
    );
  }

  static contextTypes = {
    redux: PropTypes.object.isRequired
  }
}

@connect(({counter}) => ({counter}))
class UsePanelsMoreStuff {
  render() {
    const { width } = this.props;

    return (
      <Panel width={width}>
        <Title style={style.title}>More stuff...</Title>
        <div>{`The counter is at ${this.props.counter}`}</div>
      </Panel>
    );
  }
}

class PanelsRuntimeHome {
  render() {
    const { width } = this.props;

    return (
      <Panel width={width}>
        <Title style={style.title}>Panels runtime</Title>
        <Action href='http://usepanels.com.dev:3000/' style={style.firstAction}>Use Panels</Action>
      </Panel>
    );
  }
}

const style = {
  panel: {
    backgroundColor: '#323232',
    color: '#F2F2F2'
  },
  action: {
    base: {
      backgroundColor: '#323232',
      color: '#F2F2F2',
      padding: '15px 35px 15px 50px',
      width: '100%'
    },
    active: {
      backgroundColor: '#F2F2F2',
      color: '#323232'
    }
  },
  button: {
    backgroundColor: '#F2F2F2',
    border: 0,
    color: '#323232',
    width: 50
  },
  firstAction: {
    base: {
      backgroundColor: '#323232',
      color: '#F2F2F2',
      marginTop: 25,
      padding: '15px 35px 15px 50px',
      width: '100%'
    },
    active: {
      backgroundColor: '#F2F2F2',
      color: '#323232'
    }
  },
  image: {
    marginTop: 25
  },
  title: {
    color: '#F2F2F2',
    marginTop: 25
  }
};

export default i({
  'usepanels.com.dev:3000': {
    'Home': UsePanelsHome,
    'MoreStuff': UsePanelsMoreStuff
  },
  'runtime.usepanels.com.dev:3000': {
    'Home': PanelsRuntimeHome
  }
});
