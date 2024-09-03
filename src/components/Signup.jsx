import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Signup() {
    return (
        <>
            <Row style={{ height: '100vh', backgroundColor: "#fff" }}>
                <Col md={3}>
                    <video style={{ width: '400px', height: '100vh', objectFit: 'cover' }} autoPlay loop muted src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"></video>
                </Col>
                <Col md={6}>
                    <div className='mt-3' style={{ padding: '30px 60px 0px', marginLeft: '100px' }}>
                        <div>
                            <h4 className='fw-bold mb-4'>Sign up to Dribbble</h4>
                            <Form style={{width:'450px'}}>
                                <Form.Group className="mb-4 d-flex" controlId="formBasicEmail">
                                    <div className='me-3 text-dark fw-bold'>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control className='p-3' type="text" placeholder="" />
                                    </div>
                                    <div className='me-3 text-dark fw-bold'>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control className='p-3'  type="text" placeholder="" />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Label className='text-dark fw-bold'>Email</Form.Label>
                                    <Form.Control className='p-3' style={{width:'430px'}} type="email" placeholder="" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label className='text-dark fw-bold'>Password</Form.Label>
                                    <Form.Control style={{width:'430px'}} className='p-3' type="password" placeholder="6+ characters" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="
I agree with Dribbble's Terms of Service, Privacy Policy, and default Notification Settings" />
                                </Form.Group>
                                <Button style={{width:"430px",borderRadius:'50px'}} variant="dark" type="submit" className='p-3'>
                                    Create Account
                                </Button>
                                <p className='text-center mt-3 '>Already have an account? <a href="" className='text-dark'>Sign In</a> </p>
                                <p style={{fontSize:'12px',width:'300px'}}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                            </Form>
                        </div>
                    </div>

                </Col>
                <Col md={3}></Col>
            </Row>
        </>
    )
}

export default Signup