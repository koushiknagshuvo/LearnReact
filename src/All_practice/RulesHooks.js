import React from 'react'
import { useState } from "react"

const RulesHooks = () => {

    const [myName, setmyName] = useState("thapa tecnical")

    return (
        <>
         <h1>{myName}</h1>   
        </>
    )
}

export default RulesHooks
