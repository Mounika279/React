import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataShare } from "../16apr 2024/navigation"


const Header=()=>{
  const{cartItems}=useContext(DataShare)
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="link-no-decoration" to={"/"}>Home</Link>
      <Link className="link-no-decoration" to={"/contact"}>Contact</Link>
      <Link className="link-no-decoration" to={"/service"}>Services</Link>
      <Link className="link-no-decoration"to={"/booking"}>Bookings</Link>
      <Link className="link-no-decoration" to={"/cart"}>Cart ({cartItems.length})</Link>
    </div>
  </div>
</nav>

        </>
    )
}
export default Header