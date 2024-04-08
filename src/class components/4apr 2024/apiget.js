import { Component } from "react";
import axios from "axios"
import Spinner from "../../functionalComponent/5Components/spinner";

class Api extends Component{
    state={
        reciepe:[]
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData=async()=>{
       const result=await axios.get("https://dummyjson.com/recipes")
    //    console.log(result)
    this.setState({
        reciepe:result.data.recipes
    })
    }
    deleteReciepe = index => {
       const newReciepe=this.state.reciepe.filter((eachObject,i)=>i!==index)
    this.setState({reciepe:newReciepe})
    };

    render(){
        // console.log(this.state.reciepe,"log from render")
        return(
<>
<h1 className="rest"> Moun's Restaurant</h1>
{
    this.state.reciepe.length>0
    ?
    <div className="cards"> 
    {
this.state.reciepe.map((eachObject,index)=>{
    return(
        <div className="items">
        <h3 className="name">{eachObject.name}</h3>
        <h4  className="cuisine">Cuisine: {eachObject.cuisine}</h4>
        <h4 className="type">MealType:{eachObject.mealType}</h4>
        <img className="img" src={eachObject.image} alt={eachObject.name} width={200}></img>
         <button className="btns"onClick={()=>this.deleteReciepe(index)}>Delete</button>

        </div>
    )
})
    }
    </div>
    :
    <Spinner/>


}
</>
        )
    }
}
export default Api