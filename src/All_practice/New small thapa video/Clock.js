import React,{useState} from 'react'

const Clock = () => {

    let newTime = new Date().toLocaleTimeString();

    const [setATime, setsetATime] = useState(newTime)
    const setNewTime = () =>{

        let newCTime = new Date().toLocaleTimeString();
        setsetATime(newCTime)
    }

    return (
        <>
           <h1>{setATime}</h1> 
           <button onClick ={setNewTime} >click me</button>
        </>
    )
}

export default Clock
