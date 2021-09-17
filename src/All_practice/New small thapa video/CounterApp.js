import React,{useState} from 'react'

const CounterApp = () => {

    const [count, setcount] = useState(0)

    const incCounter = ()=>{
        setcount(count + 5)
    }

    return (
        <>
         <h1>{count}</h1> 
         <button onClick = {incCounter}>click me </button>  
        </> 
    )
}

export default CounterApp
