import Table from 'react-bootstrap/Table';

function StripedRowExample() {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mounika</td>
          <td>Hyderabad</td>
          <td>@moun</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jyothi</td>
          <td>Hyderabad</td>
          <td>@Jyo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StripedRowExample;