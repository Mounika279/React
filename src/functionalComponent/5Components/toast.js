import Toast from 'react-bootstrap/Toast';

function BasicExample() {
  return (
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Mounika</strong>
        <small>Hello everyone!!!!</small>
      </Toast.Header>
      <Toast.Body>Bootstrap,ReactBootstrap</Toast.Body>
    </Toast>
  );
}

export default BasicExample;