import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Row, Col } from 'react-bootstrap'
import { useValidationResolver } from '../hooks'

const ContactSection = () => {
  const phoneRegex =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const SCHEMA = yup.object().shape({
    name: yup.string().required('Your name is required.'),
    email: yup.string().email().required('Your email is required.'),
    phone: yup
      .string()
      .matches(phoneRegex, 'Phone Number is invalid.')
      .required('Your phone number is required.'),
    website: yup.string().nullable(),
    reason: yup.string().required('This information is helpful.'),
  })
  const resolver = useValidationResolver(SCHEMA)

  const { handleSubmit, register } = useForm({ resolver })

  const hijackSubmit = () => {
    handleSubmit((data) => {
      console.log(data)
    })
  }

  return (
    <Row>
      <Col
        className="lets-chat d-flex align-items-center justify-content-center"
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        xxl={6}
      >
        <h1>Let's Chat!</h1>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
        <form onSubmit={hijackSubmit}>
          <div className="mb-3">
            <label className="form-label">
              Your Name <span style={{ color: 'red' }}>*</span>
            </label>
            <input {...register('name')} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Your Email <span style={{ color: 'red' }}>*</span>
            </label>
            <input {...register('email')} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Your Phone <span style={{ color: 'red' }}>*</span>
            </label>
            <input {...register('phone')} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Other Information</label>
            <textarea
              {...register('reason')}
              className="form-control"
            ></textarea>
          </div>
          <div className="text-center">
            <input className="btn btn-primary" type="submit" />
          </div>
        </form>
      </Col>
    </Row>
  )
}

export default ContactSection
