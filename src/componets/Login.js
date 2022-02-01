import React, { useCallback,useEffect, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';    
import app from "../firebase";
import { AuthoContext } from '../Auth';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';

const Login = ({ history }) => {
  useEffect(()=>{
    console.log("render")
  fetch("http://numbersapi.com/43/trivia")
  .then(response => 
    { if(!response){
      throw new Error("taken");
    }
      response.text()})
  .then(y =>{
    console.log(y)
  }).catch(reject => console.log(reject))
  },[])
  

    const handleLogin = useCallback (
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app 
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);

               // history.pushState("/");
            } catch (error) {
                console.error(error)
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthoContext)

    if (currentUser) {
        return <Redirect to="/" />
    } 
    
    return (
        <>
        <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5 pt-6">
        <Container>
         
          <Row className="justify-content-center form-bg-image"  >
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Log in</h3>
                </div>
                <Form method="post" onSubmit={handleLogin} className="mt-4">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required name="email" type="email" placeholder="example@company.com" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required name="password" type="password" placeholder="**********" />
                    </InputGroup>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Log in
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </>
    );
};

export default withRouter(Login);