import { useEffect, useState } from "react"
import axios from "axios"


const UseEffectReciepe=()=>{
    const[movie,setMovies]=useState([])
    const[eachItem,setEachItem]=useState({})
    const[count,setCount]=useState(1)
    // const[age,setAge]=useState(100)

    useEffect(()=>{
        console.log("rendering...")
        fetchProducts()
        return()=>{
            //prevent memory leaks
        }
    },[])

    useEffect(()=>{
        eachProduct()
    },[count])

   const eachProduct=async()=>{
    const response=await axios.get(`https://dummyjson.com/recipes/${count}`)
    setEachItem(response.data)
    console.log(response)
   }

    const fetchProducts=async()=>{
       const response= await axios.get("https://dummyjson.com/recipes")
       console.log(response)
       setMovies(response.data.data) 
    }

    const incrementHandler=()=>{
        setCount(count+1)
    }
    const decrementHandler=()=>{
        setCount(count-1)
    }
    return(
        <>
        <h1>Food Items</h1>
        {/* <h5>{count}</h5> */}
        <button onClick={decrementHandler}>Previous</button>
        <button onClick={incrementHandler}>Next</button>
        {/* <h5>Current age :{age}</h5>
        <button onClick={incrementAge}>Click to change age</button> */}
        <h3>{eachItem?.name}</h3>
       {eachItem?.image&& ( // Check if poster exists before rendering image
                <img  className="image"src={eachItem.image} alt="Movie Poster" style={{height:"300px",width:"300px"}} />
            )}
            {/* <i className="instruct">{eachItem.instructions}</i> */}
        </>

    )
}
export default UseEffectReciepe