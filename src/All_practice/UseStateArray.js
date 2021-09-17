import React, { useState } from 'react'

const UseStateArray = () => {

    const myBioData = [
        {
            id: 0, myName: "koushik", age: 21
        },
        {
            id: 1, myName: "nag", age: 23
        },
        {
            id: 2, myName: "shuvo", age: 25
        }
    ]

    const [myArray, setmyArray] = useState(myBioData);

    const clearArray = () => {
        setmyArray([])
    }
    const removeElement = (id) => {
        const myNewArray = myArray.filter((curElm) => {
            return curElm.id != id;

        })
        setmyArray(myNewArray)
    }

    return (
        <>
            {
                myArray.map((curElm) => {
                    return (
                        <h1 key={curElm.id}>Name:
                            {curElm.myName} & Age : {curElm.age}
                            
                            <button onClick = { () => removeElement(curElm.id)}>remove</button>
                        </h1>)
                            
                }
                )
            }
            <button onClick={clearArray}>clear</button>
        </>
    )
}

export default UseStateArray
