import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  render() {

    let redux = require('redux')
    console.log(redux)

    let oldState = {
      name: ['nam', 'chung', 'hieu'],
      BeginStatus: true
    }

    let reducerone = (state = oldState, action) => {
      switch (action.type) {
        //action nó chỉ là 1 cái tên
        case 'ACTION_CHANGSTATE':
          //thực thi chính là thằng reducer này
          return {...state, BeginStatus: !state.BeginStatus }

        case 'ADD_NEW':
          return {...state, name:[...state.name,action.newadd]}
        case 'DELETE_RECORD':
          return {...state, name:state.name.filter((item,i)=> i !== action.vitri)}
        
        default:
          return state
      }
    }
    
    let storeone = redux.createStore(reducerone);

    //ham subscribe dung de theo doi sate   giống như getter trong vue
    storeone.subscribe(()=>{
      console.log(JSON.stringify(storeone.getState()))
    })

    //thực thi cái action ACTION_CHANGSTATE

    storeone.dispatch({ type: 'ACTION_CHANGSTATE' })
    console.log(storeone.getState());

    storeone.dispatch({
      type: 'ADD_NEW',
      newadd: 'duy'
    })

    console.log(storeone.getState())


    storeone.dispatch({
      type: 'DELETE_RECORD',
      vitri: 0
    })

    console.log(storeone.getState())


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
