import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form } from "formik";

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
    >
      <Form>
        <FormGroup row>
          <Label htmlFor="firstName" md="2">
            First Name
          </Label>
          <Col md="10">
            <Field
              name="firstName"
              placeholder="First Name"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="lastName" md="2">
            Last Name
          </Label>
          <Col md="10">
            <Field
              name="lastName"
              placeholder="Last Name"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="phoneNum" md="2">
            Phone Number
          </Label>
          <Col md="10">
            <Field
              name="phoneNum"
              placeholder="(xxx) xxx-xxxx"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="email">Email</Label>
          <Col md="10">
            <Field
              name="email"
              placeholder="drummer@drumsource.com"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="experience">Years of playing</Label>
          <Col md="10">
            <Field name="experience" type="number" className="form-control" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="influences">Influences</Label>
          <Col md="10">
            <Field className="form-control" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="styles">Styles of playing</Label>
          <Col md="10">
            <Field
              name="styles"
              placeholder="Rock, Jazz, Country, etc."
              className="form-control"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="objectives">Learning Objectives</Label>
          <Col md="10">
            <Field className="form-control" />
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default ProfileForm;
