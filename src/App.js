// @flow
import React, { Component } from 'react';
import UserListContainer from './components/containers/UserListContainer';
import './App.css';

type Props = {};

class App extends Component<Props> {
  componentDidMount() {}

  render() {
    return <UserListContainer />;
  }
}

export default App;
