const redux = require('redux');

// Reducer function to handle 'increment' and 'decrement' actions
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }
    return state;
};

// Create Redux store with the counterReducer
const store = redux.createStore(counterReducer);

// Subscriber function to log the latest state
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

// Subscribe to the store
store.subscribe(counterSubscriber);

// Dispatch the 'increment' action 5 times
for (let i = 0; i < 5; i++) {
    store.dispatch({ type: 'increment' });
}

// Dispatch the 'decrement' action to decrease the counter value
store.dispatch({ type: 'decrement' });
