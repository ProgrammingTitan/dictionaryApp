import React from 'react';
import {Image , Container, Row, Col} from 'react-bootstrap';


class Results extends React.Component{

    render(){
        return(
            <div> {this.props.wordID && 
            <div className="box">
                <Container>
                    <Row>
                        <Col xs={9} md={6} >
                            <Image className="image" src = {this.props.photo} fluid rounded/>
                        </Col>
                        <Col xs={6} md={6}>
                        
                        <div className = "results">
                            <h4><b>{this.props.wordID}</b></h4>
                            <div>{this.props.wordType && <p><b>Word Type: </b>  {this.props.wordType}</p>}</div>
                            <div>{this.props.definition && <p><b>Definition: </b>  {this.props.definition}</p>}</div>
                            <div>{this.props.simWord_0 &&<p><b>Similar Words: </b></p>}</div>
                            <div>{this.props.simWord_0 &&<p>{this.props.simWord_0}</p>}</div>
                            <div>{this.props.simWord_1 &&<p>{this.props.simWord_1}</p>}</div>
                            <div>{this.props.simWord_2 &&<p>{this.props.simWord_2}</p>}</div>
                        </div>

                        </Col>
                    </Row>
                </Container>
            </div>
                            }
                             <div className = "error">{this.props.error && <p>Word Not Found</p>}</div>
                            </div>



        );
    }






}

export default Results;