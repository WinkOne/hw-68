import {
    ADD,
    DECREMENT,
    FETCH_COUNTER_REQUEST,
    FETCH_COUNTER_SUCCESS,
    FETCH_POST_SUCCESS,
    INCREMENT,
    SUBTRACT
} from "./action";

const initialState = {
    counter:0,
    loading:false,
    postText: '',
    posts: null
};
const reducer = (state=initialState,action)=> {
    switch (action.type) {
        case INCREMENT:
            return {...state, counter: state.counter + 1};
        case DECREMENT:
            return {...state, counter: state.counter - 1};
        case ADD:
            return {...state, counter: state.counter + action.amount};
        case SUBTRACT:
            return {...state, counter: state.counter - action.amount};
        case FETCH_COUNTER_REQUEST:
            return {...state,loading: true};
        case FETCH_COUNTER_SUCCESS:
            return {...state,counter: action.counter,loading: false};
        case 'ONE_TEXT':
            return {...state, postText: action.value};
        case FETCH_POST_SUCCESS:
            return {...state, posts: action.response};
        default:
            return state;
    }
};

export default  reducer;