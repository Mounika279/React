import { Employees } from "./filterdata";
const filterQuery="react developer"
const Empdata=()=>{
    return(
        <>



        {
            Employees.filter(value=>value.job===filterQuery).map(value=><>
        <h4>Name:{value.name}</h4>
        <h4>job:{value.job}</h4>
        <h4>Salary:{value.salary}</h4>
        </>
        )
} 
        </>
    )
}
export default Empdata