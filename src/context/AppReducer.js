export default (state, action) => {
    switch(action.type){
        case "ADD_USER":
            return{
                ...state,
                user: action.payload,
                isLoggin: true
            }
        case "LOGOUT":
            return{
                ...state,
                user: {},
                isLoggin: false
            }
        default:
            return state;
    }
}