import Forms1 from "../12apr2024/controllable"
import { DataShare } from "../16apr 2024/navigation"
import Header from "../16apr comp-nav/header"
import { useContext } from "react"

const ContactScreen=()=>{
    const {data,ChangeData}= useContext(DataShare)
    const{clr,ChangeColor}=useContext(DataShare)
    
//    console.log(response)
    return(
<>
<Header/>
<Forms1/>
<h3>hello {data.name}</h3>

<button onClick={ChangeData}>Click to change name</button>
<button onClick={ChangeColor}>Click to change color</button>
</>
    )
}
export default ContactScreen