import axiosOrders from "../axios-orders";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_ERROR = 'FETCH_COUNTER_ERROR';

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';


export const fetchPostRequest = () => {
    return {type: FETCH_POST_REQUEST}
};
export const fetchPostSuccess = (response) => {
    return {type: FETCH_POST_SUCCESS, response}
};
export const fetchPostError = () => {
    return {type: FETCH_POST_ERROR}
};

export const typePost = (value) => {
    return {type: 'ONE_TEXT', value}
};
export const getPost = () => {
    return (dispatch, getState) => {
        const post = {
            text: getState().postText,
            time: new Date()
        };
        axiosOrders.post('/posts.json', post).then(res =>{
            dispatch(fetchGetPost())
        }, error => {
            dispatch(fetchPostError(error));
        })
    }
};

export const fetchGetPost = () => {
    return dispatch => {
        dispatch(fetchPostRequest());
        axiosOrders.get('/posts.json').then(response => {
            dispatch(fetchPostSuccess(response.data));
        }, error => {
            dispatch(fetchPostError(error));
        });
    }
};

export const fetchRemovePost =  (deletePosts) => {
    return  dispatch => {
       axiosOrders.delete(`/posts/${deletePosts}.json`).then(res =>{
            dispatch(fetchGetPost())
        }, error => {
           dispatch(fetchPostError(error));
       })
    }
};

export const incrementCounter = () => {
    return dispatch => {
        dispatch({type: INCREMENT});
        dispatch(saveCounter());

    }
};
export const decrementCounter = () => {
    return dispatch => {
        dispatch({type: DECREMENT});
        dispatch(deletedCounter())
    }
};
export const addCounter = amount => {
    return dispatch => {
        dispatch({type: ADD, amount});
        dispatch(saveCounterToFive())
    }
};
export const subtractCounter = amount => {
    return dispatch => {
        dispatch({type: SUBTRACT, amount});
        dispatch(deletedCounterToFive())
    }
};

export const fetchCounterRequest = () => {
    return {type: FETCH_COUNTER_REQUEST};
};

export const fetchCounterSuccess = counter => {
    return {type: FETCH_COUNTER_SUCCESS, counter};
};

export const fetchCounterError = () => {
    return {type: FETCH_COUNTER_ERROR};
};

export const saveCounter = () => {
    return (dispatch, getState) => {
        const counter = getState().counter;
        axiosOrders.put('/counter.json', counter)
    }
};
export const deletedCounter = () => {
    return (dispatch, getState) => {
        const counter = getState().counter;
        axiosOrders.put('/counter.json', counter)
    }
};
export const saveCounterToFive = () => {
    return (dispatch, getState) => {
        const counter = getState().counter;
        axiosOrders.put('/counter.json', counter)
    }
};
export const deletedCounterToFive = () => {
    return (dispatch, getState) => {
        const counter = getState().counter;
        axiosOrders.put('/counter.json', counter)
    }
};
export const fetchCounter = () => {
    return dispatch => {
        dispatch(fetchCounterRequest());
        axiosOrders.get('/counter.json').then(response => {
            dispatch(fetchCounterSuccess(response.data));
        }, error => {
            dispatch(fetchCounterError(error));
        });
    }
};

