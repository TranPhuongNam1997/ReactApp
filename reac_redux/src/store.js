var redux = require('redux')
import nameReducer from './Reducer/ReducerName'  
import StatusReducer from './Reducer/ReducerStatus'  


// let oldState = {
//   name: ['nam', 'chung', 'hieu'],
//   BeginStatus: true
// }

// let reducerone = (state = oldState, action) => {
//   switch (action.type) {
//     //action nó chỉ là 1 cái tên
//     case 'ACTION_CHANGSTATE':
//       //thực thi chính là thằng reducer này
//       return {...state, BeginStatus:!state.BeginStatus }

//     case 'ADD_NEW':
//       return {...state, name:[...state.name,action.newadd]}

//     case 'DELETE_RECORD':
//       return {...state, name:state.name.filter((item,i)=> i !== action.vitri)}
    
//     default:
//       return state
//   }
// }

const allReducer = redux.combineReducers({
    name: nameReducer,
    BeginStatus: StatusReducer
})

// const all = redux.combineReducers({
  
// })

let store = redux.createStore(allReducer);

store.subscribe(()=>{

  console.log(JSON.stringify(store.getState()))

})

//thực thi cái action ACTION_CHANGSTATE

store.dispatch({ type: 'ACTION_CHANGSTATE' })
console.log(store.getState());


store.dispatch({
  type: 'ADD_NEW',
  newadd: 'duy'
})

console.log(store.getState())


store.dispatch({
  type: 'DELETE_RECORD',
  vitri: 0
})

console.log(store.getState())

export default store