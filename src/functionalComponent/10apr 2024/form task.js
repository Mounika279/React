import { useRef, useState } from "react"

const Form2 =()=>{
    const userNameRef=useRef("")
    const passWordRef=useRef("")

    const[errorVisible,setErrorVisible]=useState(false)

    const[currentDetails,updatedDetails]=useState([])

    const handleSubmit=(event)=>{
        event.preventDefault()
console.log("submitted")
const user=userNameRef.current.value
const pw=passWordRef.current.value
if(pw.length<5){
    setErrorVisible(true) 
}else{
    setErrorVisible(false)
    const details={
        username:userNameRef.current.value,
        password:passWordRef.current.value
    }
    updatedDetails([...currentDetails,details])
   userNameRef.current.value=""
   passWordRef.current.value=""
}
    }

    return(
        
<div>
<h1>Registration Form</h1>
<form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email :</label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    //   placeholder="Enter email"
      ref={userNameRef}
    />
    <small id="emailHelp" className="form-text text-muted">
    </small>
  </div>
  <div className="form-group">
    
    <label htmlFor="exampleInputPassword1"id="pwd">Password :</label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
    //   placeholder="Password"
      ref={passWordRef}
    />
  </div>
  {errorVisible &&<span style={{color:"red"}}> password shd be greater than 5</span>}

  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
{currentDetails.length>0 &&(
<table>
    <thead>
        <tr className="columns">
            <th className="rows">Username</th>
            <th className="rows">Password</th>
        </tr>
    </thead>
    <tbody>
    {currentDetails.map((user,index)=>(        
            <tr className="columns" key={index}>
                <td className="rows">{user.username}</td>
                <td className="rows">{user.password}</td>
            </tr>
           ))} 
    </tbody>
</table>
)}
</div>
    )
}
export default Form2