// import { useEffect } from "react"
// import { useState } from "react"
// import axios from "axios"

// const DomManipulation=()=>{
//     const[quotes,setquotes]=useState([])
//     const[quote,setquote]=useState({})
//     const[Count,setCount]=useState(1)

//     useEffect(()=>{
//     hitapi()
//     return()=>{

//     }
//     },[])

//     useEffect(()=>{
//       eachQuote()
//     },[Count])

//     const hitapi=async()=>{
//         const result=await axios.get("https://dummyjson.com/quotes")
//         setquotes(result.data)
//     }

//     const eachQuote=async()=>{
//         const response=await axios.get(`https://dummyjson.com/quotes/${Count}`)
//         setquote(response.data)
//     }

//     const incrementCount=()=>{
//         setCount(Count+1)
//     }

//     const decrementCount=()=>{
//         setCount(Count-1)
//     }
//    return(
//     < >
//     <button onClick={incrementCount}> Next</button>
//     <button onClick={decrementCount}>Prev</button>

//           <h1>Quotes</h1>
//           {quote && 
//           <div>
//           <h3>{quote.quote}</h3>
//           <h5>{quote.author}</h5>
//           </div>
//   }
  
//     </>
//    )
// }
// export default DomManipulation