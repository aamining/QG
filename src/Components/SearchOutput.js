import React, { Component } from 'react';
import './SearchOutput.css'
import { Container, Row, Col } from 'react-bootstrap';


export default class SearchOutput extends Component {

    constructor(props) {
        super(props);
        this.state = {


        }
        this.callback = this.callback.bind(this);


    }

    callback(event) {

        event.preventDefault();
        const {url} = this.props.qs
        this.props.qaCallback(url)
    }

    render() {

        return (
          <Container>

            <Row>
              <Col xs="1" lg="1" />
              <Col xs="10" lg="10" className="search">
                <ul>
                  <a href={this.props.qs.url} style={{ border: 'none' }} onClick={this.callback}>{this.props.qs.questionkey}</a>

                </ul>
              </Col>
              <Col xs="1" lg="1" />
            </Row>
          </Container>
        )

    }

}


