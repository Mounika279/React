const Tabledata=(prop)=>{
    return(
        <>
        <table border="1">
            <tr>
                <td className="info">{prop.date}</td>
                <td className="info">{prop.team}</td>
                <td className="info"><img className="matchimage" src={prop.image} alt="match"></img></td>

            </tr>
        </table> 
        
      
        </>
    )
}
export default Tabledata
