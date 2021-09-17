import React, {useState} from 'react'
import './FirstPractice.css' 
const UseStateObject = () => {
    const [myObject, setmyObject] = useState({

        myName : "koushik",
        myAge : 23,
        degree : 'BSC'

    })

    const changeObject = () => {      
        setmyObject({
            // myName : 'koushik nag shuvo',
            // myAge : 21,
           ...myObject,degree : 'PHD'
           
        })
    }

    return (
        <>
            <h1>Name : {myObject.myName} & age : {myObject.myAge} & Degree : {myObject.degree} </h1>
            <button onClick = {changeObject}> click me to update</button>
        </>
    )
}

export default UseStateObject
