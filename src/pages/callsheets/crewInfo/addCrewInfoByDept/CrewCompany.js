/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Company info */
import React, { useState } from "react"
import { useRedirect } from "../../../../hooks/Redirect"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Alert from "react-bootstrap/Alert"
import styles from "../../../../styles/Callsheets.module.css"
import btnStyles from "../../../../styles/Button.module.css"
import { useHistory } from "react-router-dom"

const CrewCompany = ({ handleChange, postData, setShow }) => {
  useRedirect()
  // eslint-disable-next-line
  const [errors, setErrors] = useState({})
  const history = useHistory()

  const {
    production_name,
    production_company,
    company_phone,
    company_email,
    company_address_line_1,
    company_address_line_2,
    company_address_line_3,
    company_address_line_4,
    total_shoot_days,
  } = postData || {}

  const handleClick = () => {
    history.push(`/${localStorage.getItem("projectSlug")}/logo/edit`)
  }

  return (
    <div className="text-center pb-4">
      <div className={`mt-0 text-center ${styles.SubTitle}`}>
        <span
          className={`float-right py-1 ${styles.Bold} ${styles.Close}`}
          onClick={() => setShow(false)}
        >
          Close
        </span>
        <h3
          className={`d-none d-sm-block pl-5 mb-0 text-center py-1 ${styles.Bold}`}
        >
          PRODUCTION COMPANY{" "}
        </h3>
        <h3 className={`d-sm-none pl-5 mb-0 text-center py-1 ${styles.Bold}`}>
          COMPANY{" "}
        </h3>
      </div>
      <div className={`py-2 ${styles.White}`}></div>
      <h5 className={`mb-3 py-1 ${styles.SubTitle2}`}>Company Logo</h5>
      {/* logo button*/}
      <Row className={`${styles.ButtonLine} my-4`}>
        <Col className="text-center">
          <Button
            className={`py-0 mb-0 ${btnStyles.Blue}`}
            onClick={() => handleClick()}
          >
            Add / Change Company Logo
          </Button>
        </Col>
      </Row>
      <h5 className={`mb-3 py-1 ${styles.SubTitle2}`}>Company Details</h5>
      {/* Production Name - Production Company */}
      <Row>
        <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group
            controlId="production_name"
            className={`${styles.Width} `}
          >
            <Form.Label className={`${styles.Bold}`}>
              Production Name
            </Form.Label>
            <Form.Control
              className={`${styles.Input}`}
              type="text"
              name="production_name"
              value={production_name}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.production_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
        <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group
            controlId="production_company"
            className={`${styles.Width} `}
          >
            <Form.Label className={`${styles.Bold}`}>
              Production Company
            </Form.Label>
            <Form.Control
              className={`${styles.Input}`}
              type="text"
              name="production_company"
              value={production_company}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.production_company?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
      </Row>
      {/* phone - email BodyColor */}
      <Row>
        <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="company_phone" className={`${styles.Width} `}>
            <Form.Label className={`${styles.Bold} `}>Company Phone</Form.Label>
            <Form.Control
              className={`${styles.Input}`}
              type="text"
              name="company_phone"
              value={company_phone}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.company_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
        <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="company_email" className={`${styles.Width} `}>
            <Form.Label className={`${styles.Bold}`}>Company Email</Form.Label>
            <Form.Control
              className={`${styles.Input}`}
              type="text"
              name="company_email"
              value={company_email}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.company_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
      </Row>
      <h5 className={`my-3 py-1 ${styles.SubTitle2}`}>Company Address</h5>
      {/* company address */}
      <Row>
        <Col xs={12} md={6} className=" p-0 p-md-2">
          <div className="d-flex justify-content-center mb-3">
            <Form.Group
              controlId="company_address_line_1"
              className={`${styles.Width2} `}
            >
              <Form.Label className={`${styles.Bold}`}>
                Company Address Line 1
              </Form.Label>
              <Form.Control
                className={`${styles.InputScene}`}
                type="text"
                name="company_address_line_1"
                value={company_address_line_1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.company_address_line_1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </div>
          {/* line 2 */}
          <div className="d-flex justify-content-center">
            <Form.Group
              controlId="company_address_line_2"
              className={`${styles.Width2} `}
            >
              <Form.Label className={`${styles.Bold}`}>
                Company Address Line 2
              </Form.Label>
              <Form.Control
                className={`${styles.InputScene}`}
                type="text"
                name="company_address_line_2"
                value={company_address_line_2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.company_address_line_2?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </div>
        </Col>
        <Col xs={6} className=" p-0 p-md-2">
          <div className="d-flex justify-content-center mb-3">
            {/* line 3 */}
            <Form.Group
              controlId="company_address_line_3"
              className={`${styles.Width2} `}
            >
              <Form.Label className={`${styles.Bold}`}>
                Company Address Line 3
              </Form.Label>
              <Form.Control
                className={`${styles.InputScene}`}
                type="text"
                name="company_address_line_3"
                value={company_address_line_3}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.company_address_line_3?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            {/* line 4 */}
            <Form.Group
              controlId="company_address_line_4"
              className={`${styles.Width2} `}
            >
              <Form.Label className={`${styles.Bold}`}>
                Company Address Line 4{" "}
              </Form.Label>
              <Form.Control
                className={`${styles.InputScene}`}
                type="text"
                name="company_address_line_4"
                value={company_address_line_4}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.company_address_line_4?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </div>
          {/* old logo */}
          <div>
            {/* <p className={`${styles.Bold}`}>Company Logo</p>
          <div
              className={`mr-4 ${appStyles.Content} d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center pt-3">
                  {company_logo ? (
                    <>
                      <figure>
                        <Image className={styles.Logo} src={company_logo} rounded />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload"
                        >
                          Change the logo
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label
                      className="d-flex justify-content-center"
                      htmlFor="image-upload"
                    >
                      <Asset
                        src={Upload}
                        message="Upload Image"
                      />
                    </Form.Label>
                  )}
    
                  <Form.Control
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleChangeLogo}
                    ref={imageInput1}
                  />
              </Form.Group>
              {errors?.company_logo?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </div> */}
          </div>
          {/* end */}
        </Col>
      </Row>
      <h5 className={`my-3 py-1 ${styles.SubTitle2}`}>Shoot Days</h5>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="mt-3 d-flex justify-content-center text-center">
            <Form.Group
              controlId="total_shoot_days"
              className={`${styles.Width2} `}
            >
              <Form.Label className={`${styles.Bold}`}>
                Total Shoot Days
              </Form.Label>
              <Form.Control
                className={`${styles.Input}`}
                type="text"
                name="total_shoot_days"
                value={total_shoot_days}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.total_shoot_days?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CrewCompany
