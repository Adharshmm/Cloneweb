import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <Container>
        {/* upper footer div */}
        <div className='d-flex justify-content-around py-5'>
          <div><img src="https://brandlogos.net/wp-content/uploads/2023/10/dribbble-logo_brandlogos.net_if8uk.png" height={26} width={90} alt="" /></div>
          <div className='d-flex '>

            <p className='me-5 ' style={{ fontWeight: "600" }}>For designers</p>
            <p className='me-5' style={{ fontWeight: "600" }}>Hire talents</p>
            <p className='me-5' style={{ fontWeight: "600" }}>Inspiration</p>
            <p className='me-5' style={{ fontWeight: "600" }}>Advertising</p>
            <p className='me-5' style={{ fontWeight: "600" }}>Blog</p>
            <p className='me-5' style={{ fontWeight: "600" }}>About</p>
            <p className='me-5' style={{ fontWeight: "600" }}>Career</p>
            <p style={{ fontWeight: "600" }}>Support</p>
          </div>
          <div>
            <Link style={{ textDecoration: 'none', outline: 'none', color: 'black' }}>
              <i className="fa-brands fa-twitter fa-lg me-3 " ></i>
            </Link>
            <Link style={{ textDecoration: 'none', outline: 'none', color: 'black' }}>
              <i className="fa-brands fa-square-facebook fa-lg me-3"></i>
            </Link>
            <Link style={{ textDecoration: 'none', outline: 'none', color: 'black' }}>
              <i className="fa-brands fa-instagram fa-lg me-3"></i>
            </Link>
            <Link style={{ textDecoration: 'none', outline: 'none', color: 'black' }}>
              <i className="fa-brands fa-pinterest fa-lg"></i>
            </Link>



          </div>
        </div>

        {/* lower footer div */}

        <div className='d-flex justify-content-around pt-4 pb-3'>
          <div className='d-flex justify-content-around me-5'>
            <p className='me-5 '>©️ 2024 Dribble</p>
            <p className='me-5 '>Terms</p>
            <p className='me-5 '>Privacy</p>
            <p>Cookies</p>
          </div>
          <div className='d-flex justify-content-between ms-5'>
            <p className='me-5 '>Jobs</p>
            <p className='me-5 '>Designers</p>
            <p className='me-5 '>Freelancer</p>
            <p className='me-5 '>Tags</p>
            <p className='me-5 '>Places</p>
            <p>Resources</p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Footer