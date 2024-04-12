import { fruitsdata } from "./fruitsdata";

function Fruits() {
  return (
    <>
      <table className="fruit-table" border={3}style={{ marginLeft: 150,marginTop:40,borderCollapse:'collapse'}}>
        <tbody>
          {fruitsdata
            .filter((value) => value.type === "fruit")
            .map((value, index) => (
              <tr key={index}>
                <td className="ff">{value.name}</td>
                <td className="ff">{value.type}</td>
                <td className="ff">
                  <img src={value.image} alt="fruit" height={100} width={100} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <table className="vegetable-table" border={3}style={{ marginLeft: 450,marginTop:-400,borderCollapse:'collapse'}}>
        <tbody>
          {fruitsdata
            .filter((value) => value.type === "vegetable")
            .map((value, index) => (
              <tr key={index}>
                <td className="ff">{value.name}</td>
                <td className="ff">{value.type}</td>
                <td className="ff">
                  <img src={value.image} alt="vegetable" height={100} width={100} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <table className="flower-table" border={3}style={{ marginLeft: 750,marginTop:-420,borderCollapse:'collapse'}}>
        <tbody>
          {fruitsdata
            .filter((value) => value.type === "flower")
            .map((value, index) => (
              <tr key={index}>
                <td className="ff">{value.name}</td>
                <td className="ff">{value.type}</td>
                <td className="ff">
                  <img src={value.image} alt="flower" height={100} width={100} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Fruits;

