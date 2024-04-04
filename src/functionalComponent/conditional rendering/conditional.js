 const Condition=()=>{
    
    
    //    if(isLoggedIn){
    //     return(
    //         <h3>Success</h3>
    //     )
    //    }else{
    //     return(
    //     <h3>oops</h3>
    //     )
    //    }
    // return(
    //     <h3>{isLoggedIn?"welcome user":"please login"}</h3>
    // )
    const isloggedIn=false
return(
    <>
{
    isloggedIn ?
    <Text msg="sucess"/>
    :<Text msg="fail"/>
}
    </>
)
 }
 export default Condition

 function Text({msg}){
return(
    <h4>{msg}</h4>
)
 }
