import './App.css';

import React, { Component } from 'react';
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    name: state.name
  }
}



export default connect(mapStateToProps)(App);
