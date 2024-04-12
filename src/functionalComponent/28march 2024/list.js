import Listitems from "./listdata"

const List=()=>{
    const listitems=[
        {
            id:1,
            name:"orange",
            type:"fruit",
            isfruit:true,
        },
        {
            id:2,
            name:"apple",
            type:"fruit",
            isfruit:true,
        },
        {
            id:3,
            name:"cherry",
            type:"fruit",
            isfruit:true,
        },
        {
            id:4,
            name:"potato",
            type:"vegetable",
            isfruit:false,
        },
        {
            id:5,
            name:"tomato",
            type:"vegetable",
            isfruit:false,
        },
    ]
    return(
        <>
        <ol>
        {
            listitems.map((eachObject)=>{
                return(
            <Listitems key={eachObject.id}name={eachObject.name} type={eachObject.type}/>
                )
            })}
        </ol>
        </>
    )
}
export default List