import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Cards() {
  const imageLinks = [
    "https://cdn.dribbble.com/userupload/16380979/file/original-071b8657ab36bc11eb48a4a8e8ea1547.png?resize=300x225",
    "https://cdn.dribbble.com/userupload/16380230/file/original-e5173e03642752a294ea0bcee5c583d8.jpg?resize=1024x768",
    "https://cdn.dribbble.com/userupload/16377565/file/original-0946e0dbd97e562e27397586e4ac965c.jpg?resize=300x225 ",
    "https://cdn.dribbble.com/userupload/16383701/file/original-d618024cf29d5b853f285b07a14898dd.png?resize=752x",
    "https://cdn.dribbble.com/userupload/16375257/file/original-4f1677ccd7b521951b5ac3fe0d3f3e8a.jpg?resize=752x",
    "https://cdn.dribbble.com/userupload/16375417/file/original-d2428ec8aa0c4d8d39e313b52cae4aae.png?resize=752x",
    "https://cdn.dribbble.com/userupload/16386055/file/original-d9612894d2926b254e21664cd38c4dce.jpg?resize=1024x768",
    "https://cdn.dribbble.com/userupload/16379993/file/original-dfdc3cd6ac9a8d1273c689d850c17bed.png?resize=1024x768",
    "https://cdn.dribbble.com/userupload/16378403/file/original-f4142cf5d30a6beacc172f276b6117d0.jpg?resize=1024x768",
    "https://cdn.dribbble.com/userupload/16203841/file/original-bfcd0d900b0132c83740bc016c1e180f.jpg?resize=1600x900",
    "https://cdn.dribbble.com/userupload/16373482/file/original-dc33112b0f967f31c80a832473f5af4e.png?resize=1024x768",
    "https://cdn.dribbble.com/userupload/16375695/file/original-4ee2dea861b5aeafe122f78d51579270.png?resize=1024x768",
    "https://cdn.dribbble.com/userupload/16376432/file/original-cbc5f11a566a1a2d3fdbe9fca01f7280.png?resize=1024x768",
    "https://cdn.dribbble.com/userupload/16367973/file/original-cb262dfe85f8129283fa4260b40f0c9f.png?resize=1024x768",
  ];
  return (
    <>
      <Row className="text-center bg-light " style={{ marginBottom: '150px', marginTop: '110px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '400' }}>Explore inspiring designs</h1>
        <Col md={1}></Col>

        <Col xs={12} md={10} lg={12} className='d-flex flex-wrap justify-content-center'>
          {imageLinks.map((link, index) => (

            <div className='me-4 mb-4' style={{ minWidth: '460px' }}>
              <div>
                <img style={{ objectFit: 'fill', borderRadius: '10px', width: '460px', height: '340px' }} src={link} alt="" />
              </div>
              <div>

                <div className='d-flex align-items-center mt-2'>
                  <img height={30} style={{ borderRadius: '50%' }} src="https://cdn.dribbble.com/users/19849/avatars/small/75cb2854fcb9a1b959750bf5d7e9c00b.png?1606949656" alt="" />
                  <p className='ms-2 mb-0'>Julian Burford</p>
                  <p className='ms-2 mb-0  ' style={{ borderRadius: '3px', color: '#fff', background: '#e0dede', padding: '0px 5px', paddingBottom: '2px', fontSize: '12px' }}>pro</p>
                </div>
                {/* <div>
                  <div>
                    <i class="fa-solid fa-heart fa-2xs" style="color: #b0b0b0;"></i>
                  </div>
                  <div>
                    <i class="fa-solid fa-eye fa-2xs" style="color: #bababa;"></i>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </Col>
        <Col md={1}></Col>
        <div><button className='btn btn-outline-dark p-3 mt-4' style={{ borderRadius: '50px', fontWeight: '500' }}>Browse more inspiration</button></div>
      </Row>
    </>
  )
}

export default Cards