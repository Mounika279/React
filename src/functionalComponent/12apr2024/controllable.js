import { useRef, useState } from "react"



const Forms1=()=>{
   const[name,setName]=useState("")
   const[email,setEmail]=useState("")
   const[pwd,setpwd]=useState("")
   const[cpwd,csetpwd]=useState("")

   const[name1,setErrname]=useState(false)
   const[email1,setErremail]=useState(false)
   const[cpass1,setErrcpass]=useState(false)

   const [Table,setTable]=useState([])//--created table for data

   const handlesubmit=(event)=>{
    event.preventDefault()
       setTable([...Table,{name,email,pwd,cpwd}])
       setName("")
       setEmail("")
       setpwd("")
       csetpwd("")
   }

   const namehandler=(event)=>{   //-------function for handling Name
    const person=event.target.value
    setName(person)
    if(!/^[A-Z]/.test(person)){
      setErrname("First Letter Should be capital")
    }else{
      setErrname(null)
    }
   }

   const emailhandler=(event)=>{
    const mymail=event.target.value
    setEmail(mymail)
    if(!/@gmail.com/.test(mymail)){
      setErremail("Mail should contain @gmail.com")
    }else{
      setErremail(null)
    }
   }

   const pwdhandler=(event)=>{
    const pass1=event.target.value
    setpwd(pass1)
   }

   const cpwdhandler=(event)=>{
    const cpass=event.target.value
    csetpwd(cpass)
    if(pwd!==cpass){
      setErrcpass("password did not match")
    }else{
      setErrcpass(null)
    }
   }

    return(
        <>
  <title>Form in HTML</title>
  <h2>Registration form</h2>
  <form onSubmit={handlesubmit}>
    <fieldset>
      <legend>User personal information</legend>
      <label>Enter your full name</label>
      <br />
      <input type="text" name="name" value={name} onChange={namehandler} />
      <br />
      {name1 && <span style={{color:"red"}}>{name1}</span>}
      <br/>
      <label>Enter your email</label>
      <br />
      <input type="email" name="email" value={email} onChange={emailhandler} />
      <br />
      {email1 && <span style={{color:"red"}}>{email1}</span>}
      <br />
      <label>Enter your password</label>
      <br />
      <input type="password" name="pass" value={pwd} onChange={pwdhandler} />
      <br />
      <label>confirm your password</label>
      <br />
      <input type="password" name="pass" value={cpwd} onChange={cpwdhandler} />
      <br />
      {cpass1 && <span style={{color:"red"}}>{cpass1}</span>}
      <br />
      <input  className="btn1" type="submit" defaultValue="sign-up" />
    </fieldset>
  </form>
  <table>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Confirm Password</th>
      </tr>
      {
        Table.map((data,index)=>{ 
          const{name,email,pwd,cpwd}=data
          return(
          <tr key={index}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{pwd}</td>
            <td>{cpwd}</td>

          </tr>
           ) } ) 
      }
    </tbody>
  </table>
</>

    )
}
export default Forms1