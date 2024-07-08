export default (state, action) => {
    switch (action.type){
        case 'DELETE_TRANSCATION':
            return{
                ...state,
                transcation: state.transcation.filter(transcation => transcation.id !== action.payload)
            }

        case 'ADD_TRANSCATION':
            return{
                ...state,
                transcation: [action.payload, ...state.transcation]
            }
        default:
            return state;
    }
}