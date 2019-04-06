import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Form extends React.Component{
    
    render(){
        return(
            <div className="searchBar" >
                <Container>
                    <Row>
                        <Col xs={18} md={12} >
                <form onSubmit= {this.props.getDefinition}>
                    <input  className="form" type="text" name="word" placeholder="Enter Word Here"/>
                    <button className="button" >Submit</button>
                </form>
                </Col>
                </Row>
                </Container>
            </div>


        );
    }



}

export default Form;