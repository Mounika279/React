import { Employeedata } from "./empdata";

function Employee() {
    return (
        <>
            {Employeedata.filter(value => value.salary >= 6000).map((value, index) => (
                <div key={index}>
                    <b>name:{value.name}</b>
                    <h5>job:{value.job}</h5>
                    <h5>salary:{value.salary}</h5>
                    <hr />
                </div>
            ))}
            {Employeedata.filter(value => value.salary >= 5000 && value.salary < 6000).map((value, index) => (
                <div key={index}>
                    <b>name:{value.name}</b>
                    <h5>job:{value.job}</h5>
                    <h5>salary:{value.salary}</h5>
                    <hr />
                </div>
            ))}
            {Employeedata.filter(value => value.salary >= 4000 && value.salary < 5000).map((value, index) => (
                <div key={index}>
                    <b>name:{value.name}</b>
                    <h5>job:{value.job}</h5>
                    <h5>salary:{value.salary}</h5>
                    <hr />
                </div>
            ))}
        </>
    );
}

export default Employee;
