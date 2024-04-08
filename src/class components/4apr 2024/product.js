import axios from "axios"
import { Component } from "react";

class ProductList extends Component{
componentDidMount(){
    this.fetchData()
}
// fetchData=()=>{
//     fetch("https://dummyjson.com/recipes")
//     .then(response=>response.json())
//     .then(response=>console.log(response))
// }
//  fetchData =async()=>{
//   let result=await fetch("https://dummyjson.com/recipes")
//   let result1=await result.json()
//   console.log(result1)
// }

fetchData=async()=>{
    let result=await axios.get("https://dummyjson.com/recipes")
    console.log(result)
}
render(){
    return(
        <>
        <h1>Products</h1>
        </>
    )
}

}
export default ProductList