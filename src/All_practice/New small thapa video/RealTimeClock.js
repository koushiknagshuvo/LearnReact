import React,{useState} from 'react'

const RealTimeClock = () => {

    let newTime = new Date().toLocaleTimeString();

    const [setATime, setsetATime] = useState(newTime)
    const setNewTime = () =>{
        let newCTime = new Date().toLocaleTimeString();
        setsetATime(newCTime)
    }

    setInterval(setNewTime, 1000);

    return (
        <>
            <h1>{setATime}</h1> 
        </>
    )
}

export default RealTimeClock
