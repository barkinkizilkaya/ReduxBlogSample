import react, { Fragment } from 'react';
import Number from '../Components/Number';
import Button from '../Components/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import * as actions from '../Store/Actions/Action';
import {connect} from 'react-redux'


const NumberContainer = (props) => {
    return (

        <Container>
            <Row className="align-items-center mt-5" >
                <Button clicked={(val) => props.onAddNumber(5)} color="primary">Add (5)</Button>
                <Button clicked={(val) => props.onAsyncAddNumber(5)} color="success">Add Async(5)</Button>
                <Button clicked={(val) => props.onRemoveNumber(5)} color="danger">Remove (5)</Button>
            </Row>
            <Row>
                <Col></Col>

                <Number ></Number>

                <Col></Col>
            </Row>
        </Container>


    )
}

//redux space
const mapStateToProps = state =>{
    return {
        prp : state.count
    };
}
const mapDispatchToProps = dispatch =>{
    return {
        onAddNumber : (val) =>dispatch(actions.Add(val)),
        onAsyncAddNumber : (val) =>dispatch(actions.AddAsync(val)),
        onRemoveNumber : (val) =>dispatch(actions.Remove(val)),


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NumberContainer);