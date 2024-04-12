import { data } from "./tabledata"
import Tablerow from "./tablerow"
const Table1=()=>{

return(
  <table style={{ width: "100%", textAlign: "center" }}>
  <tbody>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
{
  data.map(eachArray=>{
    return(
      <Tablerow info={eachArray} extra={"hi"}/>

    )
  })
}

   
  </tbody>
</table>



)
}
export default Table1
