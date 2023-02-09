import { Row, Col } from 'react-bootstrap'
import profilePic from '../assets/me.jpg'

const HeroSection = () => {
  const bio =
    'I am a full stack web developer with extensive experience with WordPress, Core PHP and Laravel web applications with two years in the industry. My strong suites are being independent, detail oriented and an excellent communicator that knows the right questions to ask.'
  return (
    <Row className="mt-5 mb-5">
      <Col
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        xxl={12}
        className="d-flex justify-content-center align-items-center mb-5"
      >
        <img
          className="rounded-circle profile-pic"
          src={profilePic}
          alt="Andrew"
        />
      </Col>
      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <h1 className="text-center pb-1">Greetings!</h1>
        <h5 className="text-center pt-1 pb-1">My name is Andrew!</h5>
        <p className="text-center pt-1">{bio}</p>
      </Col>
    </Row>
  )
}

export default HeroSection
