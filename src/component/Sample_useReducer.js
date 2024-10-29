import React, { useReducer } from 'react';

// 리듀서 함수 정의
function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        default:
            throw new Error('Unhandled action type');
    }
}

const Sample_useReducer = () => {
    // useReducer 훅을 사용해 상태와 dispatch 함수 가져오기
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    );
}

export default Sample_useReducer;
