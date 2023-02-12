import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { projects } from '../data/projects'
import NotFoundPage from './NotFoundPage'
import { ContactSection } from '../components'

const ProjectPage = () => {
  const params = useParams()
  const slug = params.slug || ''
  const project = projects.find((p) => {
    return p.slug === slug
  })

  const title = project.title + ' | Portfolio'

  useEffect(() => {
    if (document.title !== title) document.title = title
  }, [title])

  if (!project) {
    return <NotFoundPage />
  }

  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="d-flex justify-content-center align-items-center p-5">
            <img
              src={project.image}
              alt={project.title}
              className="w-100 h-100"
              style={{ borderRadius: '0.375rem' }}
            />
          </div>
          <h1 className="text-center ">{project.title}</h1>
          <p>{project.description}</p>
        </Col>
      </Row>
      <ContactSection />
    </>
  )
}

export default ProjectPage
