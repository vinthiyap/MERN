import { useReducer } from "react"
let initialValue=0

const counter=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1  
        case 'RESET':
            return 0
        default:
            return state
    }
}


const counter1=(state,action)=>{
    switch(action.type){
        case 'LIKE':
            return state + 1
        case 'DISLIKE' :
            return state + 1   
        case 'RESET':
            return 0
        default:
            return state
    }
}

const Reducer = () => {
    const [count, dispatch] = useReducer(counter, initialValue);
    const [count1, dispatch1] = useReducer(counter1, initialValue);

    return (
        <div>
            <h2>Counter</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT +</button>
            <br /> <br />
            <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT -</button>
            <br /> <br />
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

            <hr />

            <h2>Like/Dislike</h2>
            <h3>Count: {count1}</h3>
            <button onClick={() => dispatch1({ type: 'LIKE' })}>LIKE👍</button>
             <br /> <br />
            <button onClick={() => dispatch1({ type: 'DISLIKE' })}>DISLIKE👎</button>
             <br /> <br />
            <button onClick={() => dispatch1({ type: 'RESET' })}>Reset</button>

            <hr />
        </div>
    );
};

export default Reducer
