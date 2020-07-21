export default (state, action) => {
    switch(action.type){
        case "ADD_USER":
            return{
                ...state,
                user: action.payload
            }
        case "LOGOUT":
            return{
                ...state,
                user: {}
            }
        default:
            return state;
    }
}