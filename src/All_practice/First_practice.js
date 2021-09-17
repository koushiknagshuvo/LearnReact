import React,{useState} from 'react'
import './FirstPractice.css'
// import RulesHooks from './RulesHooks'

// // number 1
// const My_name = 'koushik'
// const Current_Date = new Date();
// const local_date = Current_Date.toLocaleDateString();
// const local_time = Current_Date.toLocaleTimeString();

// number 2 
// let curDate = new Date(2020,5,5,18);
// curDate = curDate.getHours();

// let greeting = '';
// const cssStyle = {};

// if(curDate>=1 && curDate < 12 ){
//     greeting = 'good morning';
//     cssStyle.color = 'green';
// }
// else if (curDate >= 12 && curDate < 19 ) {
//     greeting = 'good afternoon';
//     cssStyle.color = 'orange';
// }
// else{
//     greeting = 'good night';
//     cssStyle.color = 'black'
// }

// number 3 





const First_practice = () => {

    // number 3 not toggle effect
    // const [myName, setMyName] = useState('koushik nag shuvo')
    // const changeName = () =>{
    //     setMyName ('My Name is koushik nag shuvo' );
    // }

    // number 4 toggle effect
    // const [myName, setMyName] = useState('koushik nag shuvo')
    // const changeName = () =>{
    //     let val = myName;

    //     // methode number 1
    //     // if (val == 'koushik nag shuvo') {
    //     //     setMyName ('My Name is koushik nag shuvo' );
    //     // }
    //     // else {
    //     //     setMyName ('koushik nag shuvo');
    //     // }

    //     // methode number 2 
    //     (val == 'koushik nag shuvo') ?
    //         setMyName('My Name is koushik nag shuvo') : setMyName ('koushik nag shuvo' )
    // }


    return (
        <>
            {/* number 1
            <h1>{`hello, My name is ${My_name}`}</h1>
            <p>{`Current date is : ${Current_Date}`}</p>
            <p>{`local date  is : ${local_date}`}</p>
            <p>{`local time  is : ${local_time}`}</p> */}

            {/* number 2
            <h1>Hello Sir, <span style = {cssStyle}>{greeting} </span> </h1> */}

            {/* number 3 */}
            {/* <div>
                <h1>{myName}</h1>
                <button onClick = {changeName} >click me</button>
            </div> */}

             {/* number 4 */}
            {/* <div>
                <h1>{myName}</h1>
                <button onClick = {changeName} >click me</button>
            </div> */}


            {/* number 5 */}
            {/* <RulesHooks/> */}
















        </>
    )
}

export default First_practice
