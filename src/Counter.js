import React, {useState} from 'react'

const Counter = ()=>{
    const [count, setCount] = useState(0)
    return (
    <>
    <b>Counter: {count}</b>
    <div>
    <button onClick={() => {setCount(count + 1)}}>Add</button>
    <button onClick={() => {setCount(count - 1)}}>Subtract</button>
    </div>
    </>
    )
}

export default Counter