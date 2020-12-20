import react from 'react';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';

import {connect} from 'react-redux'

const Number = (props) => {
    console.log("Number Component")
    console.log(props);
    return (
        <Col>
            <h1>
                <Badge variant="warning">{props.prb}</Badge>
            </h1>
        </Col>

    );
}


const mapStateToProps = state =>{
    return{
       prb:state.count
    }
}

export default connect(mapStateToProps)(Number);