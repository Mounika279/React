import { useState } from "react"


const UseStateex=()=>{
   const arry= useState(5)
   const[count,setCount]=useState(5)

   const changeHandler=(value,type)=>{
      if(type==="increment"){
        setCount(count+value)
      }else if(type==="decrement"&& count>0){
        setCount(count-value)
      }else{
        setCount(0)
      }
   }
   
    return(
        <>
        <h3 className="added">{count}</h3>
        <button className="btnss" onClick={()=>changeHandler(5,"increment")}>increment</button>
        <button className="btnss" onClick={()=>changeHandler(5,"decrement")}>decrement</button>
        <button className="btnss" onClick={()=>changeHandler()}>reset</button>
        </>
    )
}
export default UseStateex