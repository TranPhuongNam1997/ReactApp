const StatusInitialState = true;
const StatusReducer = (state = StatusInitialState, action) => {
    switch (action.type) {
        case 'ACTION_CHANGSTATE':
            return !state;
        default:
            return state;
    }
}
export default StatusReducer