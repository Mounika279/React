// import { useState,useRef } from "react"
// import { Link } from "react-router-dom"
// import HomeScreen from "../nav16apr.js/home"

// const Login=()=>{
//   const userNameRef=useRef("")
//   const passWordRef=useRef("")
//   const[errorVisible,setErrorVisible]=useState(false)
  
//   const handleSubmit=(event)=>{
//       event.preventDefault()
// console.log("submitted")

// const user=userNameRef.current.value
// const pw=passWordRef.current.value

// if(user.length<5 && pw.length<5){
//   setErrorVisible(true)
// }else{
//   setErrorVisible(false)
//   console.log("ok submitted")
// }
//   }
//   return(
// <div>
// <form onSubmit={handleSubmit}>
//   <div className="form-group">
//     <label htmlFor="exampleInputEmail1">Email address</label>
//     <input
//       type="text"
//       className="form-control"
//       id="exampleInputEmail1"
//       aria-describedby="emailHelp"
//       placeholder="Enter email"
//       ref={userNameRef}
//     />
//     <small id="emailHelp" className="form-text text-muted">
//     </small>
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputPassword1">Password</label>
//     <input
//       type="password"
//       className="form-control"
//       id="exampleInputPassword1"
//       placeholder="Password"
//       ref={passWordRef}
//     />
//   </div>
//   {errorVisible &&<span style={{color:"red"}}>Username and password shd be greater than 5</span>}
//   <button type="submit" className="btn btn-primary">Submit
//   </button>
//   <Link to="/home">Already have an account?</Link>
// </form>

// </div>
//   )
// }
// export default Login