import { projects } from '../data/projects'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProjectSection = () => {
  return (
    <Row id="projects" className="mt-5 mb-5">
      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <p className="projects-note text-center">
          <i>Note: Projects are obfuscated for privacy.</i>
        </p>
      </Col>
      {projects &&
        projects.map((project, i) => {
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
              <Link className="project-card" to={'/projects/' + project.slug}>
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
      <Col
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        xxl={6}
        className="d-flex justify-content-center align-items-center pl-1 pr-1"
      >
        <Link className="project-card" to={'/websites/'}>
          <Card
            style={{
              width: '18rem',
            }}
          >
            <Card.Img
              variant="top"
              src={
                'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
              }
            />
            <Card.Body>
              <Card.Title>WordPress Websites</Card.Title>
              <Card.Text>Click here to see my WordPress projects</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </Row>
  )
}

export default ProjectSection
