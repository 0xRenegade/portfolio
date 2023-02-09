import { projects } from '../data/projects'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProjectSection = () => {
  return (
    <Row className="mt-5 mb-5">
      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <p className="projects-note text-center">
          <i>Note: Projects are obfuscated for privacy.</i>
        </p>
      </Col>
      {projects &&
        projects.map((project) => {
          return (
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              xxl={6}
              className="d-flex justify-content-center align-items-center pl-1 pr-1"
            >
              <Link className="project-card" to={project.slug}>
                <Card
                  style={{
                    width: '18rem',
                  }}
                >
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          )
        })}
    </Row>
  )
}

export default ProjectSection
