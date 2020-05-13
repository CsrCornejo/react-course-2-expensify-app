import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy,
    }
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy,
    }
};

const resetCount = () => {
    return {
        type: 'RESET',
    }
};

const setCount = ({ count }) => {
    return {
        type: 'SET',
        count,
    }
};

const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            return { count: state.count - action.decrementBy };
        case 'RESET':
            return { count: 0 };
        case 'SET':
            return { count: action.count };
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// Action: object sent to store

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(incrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
