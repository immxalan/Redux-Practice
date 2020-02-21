//setup initialState
const initialState = {
    players: [],
    isFetching: false,
    errors: ""
}

//setup an empty reducer
const PlayerReducer = (state=initialState, action) => {
switch(action.type){
    //setup swith, cases, and default
    default:
        return state
}
}

//export the reducer
export default PlayerReducer;