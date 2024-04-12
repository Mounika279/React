import axios from "axios"
import { Component } from "react";
import Spinner from "../../functionalComponent/5Components/spinner";

class AddtoCart extends Component{
    state={
        products:[]
    }
    componentDidMount(){
this.fetchData()
    }

    fetchData=async()=>{
       const result= await axios.get("https://dummyjson.com/products")
      this.setState({
        products:result.data.products
      })
    }
    add = (index) => {
        const newProducts = [...this.state.products]; // Make a shallow copy of the products array
        newProducts[index].count = newProducts[index].count ? newProducts[index].count + 1 : 1; // Increment count
        newProducts[index].total = newProducts[index].count * newProducts[index].price; // Update total
        this.setState({
          products: newProducts
        },this.totalprice);
      };
    
      delete = (index) => {
        const newProducts = [...this.state.products]; // Make a shallow copy of the products array
        if (newProducts[index].count > 0) { // Ensure count is greater than 0
          newProducts[index].count -= 1; // Decrement count
          newProducts[index].total = newProducts[index].count * newProducts[index].price; // Update total
          this.setState({
            products: newProducts
          },this.totalprice);
        }
      };
      lowhigh=()=>{
        const newProducts=[...this.state.products].sort((a,b)=>a.price-b.price) 
        this.setState({products:newProducts}) 
      }
      highlow=()=>{
        const newProducts=[...this.state.products].sort((a,b)=>b.price-a.price)
        this.setState({products:newProducts})
      }
      less100=()=>{
        const newProducts=this.state.products.filter(product=>product.price<100)
        this.setState({products:newProducts})
      }
      totalprice=()=>{
        const totalPrice=this.state.products.reduce((acc,product)=>{
            return acc+(product.total || 0)
        },0)
        this.setState({
           totalPrice
        })
      }
   
    render(){
        return(
           <>
           <h3 className="totall" onClick={this.totalprice}>Totalprice: {this.state.totalPrice}</h3>
           <button className="top" onClick={this.lowhigh}>LowtoHigh</button>
           <button className="top" onClick={this.highlow}>HightoLow</button>
           <button className="top" onClick={this.less100}>Lessthan100</button>
           {
            this.state.products.length>0
            ?
            <div className="cards">
                {
                    this.state.products.map((eachObject,index)=>{
                        return(
                            <div className="items">
                            <h3 className="title">{eachObject.title}</h3>
                            <img className="image" src={eachObject.thumbnail} height={200} width={200} alt={eachObject.title}></img>
                            <h4 className="count">Count: {eachObject.count || 0}</h4>
                            <h4 className="total">Total: {eachObject.total || 0}</h4>
                            <h2 className="price">{eachObject.price}</h2>
                            <button className="add" onClick={()=>this.add(index)}>+</button>
                            <button className="del" onClick={()=>this.delete(index)}>-</button>
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
export default AddtoCart