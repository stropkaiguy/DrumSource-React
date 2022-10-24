import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateProfileForm } from "../../src/utils/validateProfileForm";

const ProfileForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: "",
        agree: false,
        contactType: "By Phone",
        feedback: "",
      }}
      validate={validateProfileForm}
    >
      <Form>
        <FormGroup row className="m-2">
          <Label htmlFor="firstName" md="2">
            First Name
          </Label>
          <Col md="8" className="col-10">
            <Field
              name="firstName"
              placeholder="First Name"
              className="form-control m-3"
            />
            <ErrorMessage name="firstName">
              {(msg) => <p className="text-danger m-3">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row className="m-2">
          <Label htmlFor="lastName" md="2">
            Last Name
          </Label>
          <Col md="8" className="col-10">
            <Field
              name="lastName"
              placeholder="Last Name"
              className="form-control m-3"
            />
            <ErrorMessage name="lastName">
              {(msg) => <p className="text-danger m-3">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row className="m-2">
          <Label htmlFor="phoneNum" md="2">
            Phone Number
          </Label>
          <Col md="8" className="col-10">
            <Field
              name="phoneNum"
              placeholder="(xxx) xxx-xxxx"
              className="form-control m-3"
            />
            <ErrorMessage name="phoneNum">
              {(msg) => <p className="text-danger m-3">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row className="m-2">
          <Label htmlFor="email" md="2">
            Email
          </Label>
          <Col md="8" className="col-10">
            <Field
              name="email"
              placeholder="drummer@drumsource.com"
              className="form-control m-3"
            />
            <ErrorMessage name="email">
              {(msg) => <p className="text-danger m-3">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row className="m-2">
          <Label htmlFor="experience" md="2">
            Years of playing
          </Label>
          <Col md="8" className="col-10">
            <Field
              name="experience"
              type="number"
              min="0"
              className="form-control m-3"
            />
          </Col>
        </FormGroup>
        <FormGroup row className="m-2">
          <Label htmlFor="influences" md="2">
            Influences
          </Label>
          <Col md="8" className="col-10">
            <Field
              name="influences"
              placeholder="Buddy Rich, John Bonham, Neil Peart, etc."
              className="form-control m-3"
            />
          </Col>
        </FormGroup>
        <FormGroup row className="m-2">
          <Label htmlFor="styles" md="2">
            Styles of playing
          </Label>
          <Col md="8" className="col-10">
            <Field
              name="styles"
              placeholder="Rock, Jazz, Country, etc."
              className="form-control m-3"
            />
          </Col>
        </FormGroup>
        <FormGroup row className="m-2">
          <Label htmlFor="objectives" md="2">
            Learning Objectives
          </Label>
          <Col md="8" className="col-10">
            <Field
              name="objectives"
              placeholder="ex. I want to get better at timing and polyrhythms."
              className="form-control m-3"
            />
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default ProfileForm;
