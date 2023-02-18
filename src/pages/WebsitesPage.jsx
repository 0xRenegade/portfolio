import { websites } from '../data/websites'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const WebsitesPage = () => {
  return (
    <Row id="websites" className="mt-5 pb-5">
      {websites &&
        websites.map((website, i) => {
          return (
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              xxl={6}
              className="d-flex justify-content-center align-items-center pl-1 pr-1"
              key={i}
            >
              <Link className="project-card" to={website.url}>
                <Card
                  style={{
                    width: '18rem',
                  }}
                >
                  <Card.Img variant="top" src={website.image} />
                  <Card.Body>
                    <Card.Title>{website.title}</Card.Title>
                    <Card.Text>{website.url}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          )
        })}
    </Row>
  )
}

export default WebsitesPage
