import { BrowserRouter, Routes ,Route } from "react-router-dom"
import HomeScreen from "../nav16apr.js/home"
import ContactScreen from "../nav16apr.js/contact"
import ServiceScreen from "../nav16apr.js/services"
import BookingScreen from "../nav16apr.js/booking"
import Invalid from "../nav16apr.js/invalid"
import ReciepeDetail from "../17apr 2024/reciepedetail"
import { createContext } from "react"
import { useState } from "react"
import Color from "../nav16apr.js/Cart"
import Cart from "../nav16apr.js/Cart"

 export const DataShare=createContext()

const Navigation=()=>{
    const[cartItems,setCartItems]=useState([])
    const [data,setData]=useState(
        {
            name:"mounika",
            message:"welcome to the restaurant"
        }
    )
    // const[clr,setclr]=useState(
    //     {
    //         backgroundColor:"black"
    //     }
    // )
    const ChangeData=()=>{
        setData({...data,name:"pandu"})
    }
    // const ChangeColor=()=>{
    //     setclr({...clr,backgroundColor:"red"})
    // }
    const AddtoCart =(eachItem)=>{
        console.log('eachItem: ', eachItem);
            setCartItems([...cartItems,eachItem])
    }
    const removecart = (index) => {
        setCartItems((prevCartItems) => {
          const updatedCartItems = [...prevCartItems];
          updatedCartItems.splice(index, 1); // Remove the item at the specified index
          return updatedCartItems;
        });
      };

    return(
<>
<DataShare.Provider value={{
    data,
    ChangeData,
    cartItems,
    AddtoCart,
    removecart,
    }}>

 
<BrowserRouter>
<Routes>

    <Route path="/" Component={HomeScreen}/>
    <Route path="/contact" Component={ContactScreen}/> 
    <Route path="/service" Component={ServiceScreen}/>
    <Route path="/booking" Component={BookingScreen}/>
    <Route path="*" Component={Invalid}/>
    <Route path=":id/:reciepename"  Component={ReciepeDetail}/>
    <Route path="/cart" Component={Cart}/>

    

</Routes>
</BrowserRouter> 
 
</DataShare.Provider>
</> 
    )
}
export default Navigation