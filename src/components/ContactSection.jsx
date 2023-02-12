import { useState, useEffect } from 'react'
import { useForm } from '@formspree/react'
import { Row, Col } from 'react-bootstrap'
import { toast } from 'react-toastify'

const ContactSection = () => {
  const [vertical, setVertical] = useState(false)
  const [state, handleSubmit] = useForm('mlekjbzw')

  const handlePhoneChange = (e) => {
    const { value } = e.target

    if (!value) return value

    const phoneNumber = value.replace(/[^\d]/g, '')

    const phoneNumberLength = phoneNumber.length

    if (phoneNumberLength < 4) return phoneNumber

    if (phoneNumberLength < 7) {
      e.target.value = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    }

    e.target.value = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`
  }

  const hijackSubmit = (e) => {
    e.preventDefault()

    let form = new FormData(e.target)
    form = [...form.entries()]
    form = {
      name: form[0].filter((item) => item !== 'name').toString(),
      email: form[1].filter((item) => item !== 'email').toString(),
      phone: form[2].filter((item) => item !== 'phone').toString(),
      message: form[3].filter((item) => item !== 'message').toString(),
    }

    if (form.name.length === 0) {
      toast.error('Your name cannot be empty.', {
        autoClose: 3000,
      })
      return
    }

    if (form.email.length === 0) {
      toast.error('Your email cannot be empty.', {
        autoClose: 3000,
      })
      return
    }

    handleSubmit(e)

    if (state.succeeded) {
      toast.success('Your message was submitted successfully.', {
        autoClose: 3000,
      })
    }
  }

  const handleResize = (e) => {
    const { innerWidth } = e.target
    if (innerWidth >= 992) {
      setVertical(true)
    } else {
      setVertical(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <Row id="contact" className="mt-5 mb-5">
      <Col
        className="lets-chat d-flex align-items-center justify-content-center"
        xs={12}
        sm={12}
        md={12}
        lg={5}
        xl={5}
        xxl={5}
      >
        <h1>Let's Chat!</h1>
      </Col>
      <Col
        className="d-flex justify-content-center align-items-center"
        style={{ margin: '20px 0' }}
        xs={12}
        sm={12}
        md={12}
        lg={2}
        xl={2}
        xxl={2}
      >
        {vertical && <div className="vr"></div>}
        {!vertical && <div className="hr"></div>}
      </Col>
      <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
        <form onSubmit={hijackSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name <span style={{ color: 'red' }}>*</span>
            </label>
            <input type="text" name="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email <span style={{ color: 'red' }}>*</span>
            </label>
            <input type="email" name="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Your Phone
            </label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              onChange={handlePhoneChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Message</label>
            <textarea name="message" className="form-control"></textarea>
          </div>
          <div className="text-center">
            <input
              className="btn btn-primary"
              type="submit"
              disabled={state.submitting}
            />
          </div>
        </form>
      </Col>
    </Row>
  )
}

export default ContactSection
