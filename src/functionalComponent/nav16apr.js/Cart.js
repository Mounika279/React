import { DataShare } from "../16apr 2024/navigation"
import Header from "../16apr comp-nav/header"
import { useContext } from "react"

const Cart=()=>{
           const{cartItems,removecart}=  useContext(DataShare)
           console.log(cartItems,"cartitems")

    return(
<>
<Header/>
{
    cartItems.length>0
    ?
   <>
   {
    cartItems.map(eachCart=>{
        const{image,name,index}=eachCart
        return(
          
            <div className="cartpage">
            <h5 className="cartname">{name}</h5>
            <img  className="cartimage"src={image} alt={name} height={200}width={200}></img>
           <button className="removecart" onClick={()=>removecart(index)}>remove</button>
            </div>
           
        )
    }

    )
   }
   </>
    :
    <h3 className="tryfav">Try Your favourite food add on .....</h3>
}
        
</>
    )
}
export default Cart