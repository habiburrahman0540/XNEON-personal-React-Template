import React,{useEffect, useState} from 'react';
const Count = (numberCount) => {
    const duration = "2";
    const {number} = numberCount;
    const lavel = "hellow"
    const [count,setCount] = useState("0");
    console.log(number)
    useEffect(()=>{
let start = 0;
const end = parseInt(number);
if(start === end) return ;
let totalMilisecDur = parseInt(duration);
let incrementTime = (totalMilisecDur/end)*1000;
        let timer = setInterval(() => {
            start += 1;
            setCount(String(start) + number);
            if(start === end) clearInterval(timer)
        }, incrementTime);
    },[number,duration])
    return (
        <div>
            <h3>{lavel}</h3>
            <h1>{count}</h1>
            
        </div>
    );
};

export default Count;