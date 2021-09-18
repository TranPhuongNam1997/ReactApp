const nameInitialState = ['nam', 'chung', 'hieu'],
const nameReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case 'ADD_NEW':
            return [...state, action.newadd]

        case 'DELETE_RECORD':
            return [state.filter((item,i)=> i !== action.vitri)]
            
        default:
            return state
    }
}
export default nameReducer