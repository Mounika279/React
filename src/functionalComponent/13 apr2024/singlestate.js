import { useState } from "react"

const Singleform=()=>{

    const[formErr,setFormErr]=useState(
        {
            usernameErr:null,
            passwordErr:null
        }
    )
    const[form,setform]=useState(
        {
            username:null,
            password:null
        }
    )
    const onChangehandler=(event)=>{
     const{name,value} =event.target
     console.log(value,name)
     setform(prevState=>({
        ...prevState,[name]:value
     }))

     switch(name){
        case "username":
            if(value.length>6){
              setFormErr(
                {...formErr,usernameErr:"length shd be greater than 6"}
              )
               
            }
            break
            default:
            break
     }
    }
    const onSubmithandler=(event)=>{
        event.preventDefault()

    }
    return(
        <>
  <form onSubmit={onSubmithandler}>
    <input type="name" 
    value={form.username}
     onChange={onChangehandler}
     name="username"/> 
      {formErr.usernameErr && <span style={{color:"red"}}>Length should be less than 6</span>}
    <br/>
    <input type="password"
     value={form.password} 
      onChange={onChangehandler}
      name="password"> 
      </input>
      <button>Submit</button>
  </form>
        </>

    )
}
export default Singleform