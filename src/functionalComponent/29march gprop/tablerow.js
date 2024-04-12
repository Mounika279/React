const Tablerow=(props)=>{
    const{info,extra}=props
    return(
        <tr>
        <td>{info[0]}</td>
        <td>{info[1]}</td>
        <td>{info[2]}</td>
        <td>{extra[3]}</td>

      </tr>
    )
}
export default Tablerow