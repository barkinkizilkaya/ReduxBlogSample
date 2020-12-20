import react from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Btn = (props) => {
    return (
        <Col>
            <Button onClick={props.clicked} variant={props.color}>{props.children}</Button>
        </Col>
    )
}

export default Btn;