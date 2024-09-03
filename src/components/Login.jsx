import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Login() {
  return (
    <>
      <Row style={{ height: '100vh', backgroundColor: "#fff" }}>
        <Col md={3}>
          <video style={{ width: '400px', height: '100%', objectFit: 'cover' }} autoPlay loop muted src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"></video>
        </Col>
        <Col md={6}>
          <div  style={{ padding: '30px 60px 0px', marginLeft: '100px',marginTop:'85px' }}>
            <div>
              <h4 className='fw-bold mb-4'>Sign in to Dribbble</h4>
              <Form style={{ width: '450px' }}>


                <Button style={{ width: "430px", borderRadius: '50px' ,border:'2px solid #e5e5e5',fontWeight:'500' }} variant="light" type="submit" className='p-3 mt-4 '>
                  <i className="me-3 mb-3 fab fa-google fa-sx fa-bold"></i>
                  Sign in with Google
                </Button>
                <div style={{ position: 'relative', width: '100%', textAlign: 'center', margin: '20px 0' }} className=' mb-5'>
                  <hr style={{ position: 'relative', borderTop: '1px solid #000' ,width:'430px' }} />
                  <p style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#fff',  
                    padding: '0 10px',
                    fontSize:'14px'        
                  }}>
                    or sign with email
                  </p>
                </div>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label className='text-dark fw-bold'>Username or Email</Form.Label>
                  <Form.Control className='p-3' style={{ width: '430px' }} type="email" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword" style={{ width: '430px' }}>
                  <Form.Label className='text-dark fw-bold'>Password</Form.Label>
                  <Form.Label className='text-dark' style={{ float: 'right' }}> <a href="" className='text-dark'>forgot?</a></Form.Label>

                  <Form.Control style={{ width: '430px' }} className='p-3' type="password" placeholder="" />
                </Form.Group>


                <Button style={{ width: "430px", borderRadius: '50px', background: '#0d0c22' }} variant="dark" type="submit" className='p-3'>
                  Sign in
                </Button>
                <p className='text-center mt-3 '>Don't have an account? <a href="/signup" className='text-dark'>Sign up</a> </p>
                
              </Form>
            </div>
          </div>

        </Col>
        <Col md={3}></Col>
      </Row>
    </>
  )
}

export default Login