import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function IntroContent() {
  return (
    <>
      <Row className='heading_row mb-5'>
        <Col md={3}></Col>
        <Col md={6}>
          <div className='text-center mb-5'>
            <button className='btn bg-warning head_button'>Over 3 million ready-to-work creatives!</button>
          </div>
          <h4 style={{ fontWeight: '600', maxWidth: '870px', fontSize: '78px', lineHeight: '76px' }} className='  text-center hero_heading'>The world’s destination for design</h4>
          <p className='text-center mt-4 mb-4' style={{ fontSize: '19px', fontWeight: '500' }}>Get inspired by the work of millions of top-rated designers & agencies around the world</p>
          <div className='text-center'>
            <Link to={"/signup"}>
              <button className=' btn btn-dark p-3' style={{ borderRadius: '50px', width: '130px' }}>Get started</button>
            </Link>
          </div>
        </Col>
        <Col md={3}></Col>
      </Row>


      <div className="slider" style={{ '--width': '250px', '--height': '300px', '--quantity': '10' }}>
        <div className="list">
          <div className="item" style={{ '--position': 1 }}>
            <img
              height={300}
              style={{ borderRadius: '30px', objectFit: 'cover' }}
              src="https://cdn.dribbble.com/users/1151435/screenshots/4047057/attachments/927537/dp-umpa-web_4.jpg"
              alt=""
            />
          </div>
          <div className="item" style={{ '--position': 2 }}>
            <img
              height={300}
              style={{ borderRadius: '30px', objectFit: 'cover' }}
              src="https://static.vecteezy.com/system/resources/previews/012/027/803/non_2x/male-basketball-player-dribbling-silhouette-art-isolated-on-white-background-vector.jpg"
              alt=""
            />
          </div>
          <div className="item" style={{ '--position': 3 }}>
            <img
              height={300}
              style={{ borderRadius: '30px', objectFit: 'cover' }}
              src="https://i0.wp.com/blog.pigeepost.com/wp-content/uploads/2021/12/Loyiso-Art.jpg?resize=500%2C720&ssl=1"
              alt=""
            />
          </div>
          <div className="item" style={{ '--position': 4 }}>
            <img
              height={300}
              style={{ borderRadius: '30px', objectFit: 'cover' }}
              src="https://anhede.se/wp-content/uploads/2022/08/alex-dukkee-artist-painter-konstnar-professional-portrait-photographer-portratt-portrattfotograf-jesper-anhede-sweden-sverige-gothenburg-goteborg-3.jpg"
              alt=""
            />
          </div>
          <div className="item" style={{ '--position': 5 }}>
            <img
              height={300}
              style={{ borderRadius: '30px', objectFit: 'cover' }}
              src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div className="item" style={{ '--position': 6 }}>
            <img
              height={300}
              style={{ borderRadius: '30px', objectFit: 'cover' }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLErsNwzTYYCNtnma7vIXNm_iZPUzAekb91w&s"
              alt=""
            />
          </div>
          <div className="item" style={{ '--position': 7 }}>
            <img
              height={300}
              style={{ borderRadius: '30px', objectFit: 'cover' }}
              src="https://files.builder.misssite.com/3b/bf/3bbfe20b-8dee-4196-a3e7-7271f4799692.jpg"
              alt=""
            />
          </div>
          <div className="item" style={{ '--position': 8 }}>
            <img
              height={300}
              style={{ borderRadius: '30px', objectFit: 'cover' }}
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8zMV9jbG9zZV91cF9pbGx1c3RhdGlvbl9vZl9hX3Ntb2tpbmdfdGVlbmFnZXJfcF9iZWVjMDY0MS00ODk3LTQ4ZjktOGYzYS01YTQwODA4ZjQ5OTZfMS5qcGc.jpg"
              alt=""
            />
          </div>
          <div className="item" style={{ '--position': 9 }}>
            <img
              height={300}
              style={{ borderRadius: '30px', objectFit: 'cover' }}
              src="https://sunshinedesign.com.au/wp-content/uploads/2023/06/stufly_an_astronaut_holding_a_can_of_coke_77fe568d-0dbf-4d55-8101-faf596b2cf29_ins-1.jpg"
              alt=""
            />
          </div>
          <div className="item" style={{ '--position': 10 }}>
            <img
              height={300}
              style={{ borderRadius: '30px', objectFit: 'cover' }}
              src="https://cdn.pixabay.com/photo/2024/05/25/16/33/ai-generated-8787389_1280.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default IntroContent