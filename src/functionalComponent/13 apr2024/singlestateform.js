import { useState } from "react"


const Singleform1=()=>{
   const[form,setForm]=useState(
    {
        email:"",
        password:""
    }
   )
   const[formErr,setFormErr]=useState(
    {
        emailErr:null,
        passwordErr:null
    }
   )
   const onChangehandler=(event)=>{
    const{name,value}=event.target
    setForm(prevState=>({
        ...prevState,[name]:value
    }) )
         switch(name){
         case"email":
         if(!/@gmail.com/.test(value)){
           setFormErr (
          {...formErr,emailErr:"email should contain @gmail.com"}
           )  
         }else{
            setFormErr(
                {...formErr,emailErr:""}
            )
         }
         break;
         case "password":
            if(value.length<5){
                setFormErr(
                    {...formErr,passwordErr:"password should be more than 6 characters"}
                )
            }else{
                setFormErr(
                    {...formErr,passwordErr:""}
                )
            }
            break;
         default:
            break
         }
   }
   const onSubmithandler=(event)=>{
    console.log("Email:", form.email);
    console.log("Password:", form.password);
          event.preventDefault()
          setForm({
            email:"",
            password:""
          })
          
   }
    return(
        <>
        <h2>Using single state</h2>
        <form onSubmit={onSubmithandler}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      name="email"
      value={form.email}
      onChange={onChangehandler}
    />
    {formErr.emailErr &&<span style={{color:"red"}}>username should contain @gmail.com</span>}
    <div id="emailHelp" className="form-text">
    </div>
  </div>
  <br/>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      name="password"
      value={form.password}
      onChange={onChangehandler}
    />
    {formErr.passwordErr && <span style={{color:"red"}}>"password should have 6 characters"</span>}
  </div>
  <br/>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

        </>
    )
}
export default Singleform1