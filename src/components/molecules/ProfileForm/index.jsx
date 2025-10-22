import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input/Input";
import UploadImageBoxNew from "@/components/atoms/UploadImageBoxNew";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./ProfileForm.module.css";


export default function ProfileForm({ form, setShowModal, handleSubmit, loading }) {
  return (
    <Container fluid>
      <Row className={classes.rowGap}>
        <Col md={12}>
          <div className={classes.photoContainer}>
            <UploadImageBoxNew
              state={form.values.photo}
              setValue={(val) => form.setFieldValue("photo", val)}
              error={form.touched.photo && form.errors.photo}
              label="Profile Picture"
              containerClass={classes.containerClass}
              uploadImageBox={classes.uploadImageBox}

            />
          </div>
        </Col>
        <Col md={6}>
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            value={form.values.fullName}
            setValue={(val) => form.setFieldValue("fullName", val)}
            error={form.touched.fullName && form.errors.fullName}
            containerClass={classes.inputContainer}
            inputClass={classes.input}
          />
        </Col>
        <Col md={6}>
          <Input
            label="Email"
            placeholder="Enter your email"
            value={form.values.email}
            disabled={true}
            setValue={(val) => form.setFieldValue("email", val)}
            error={form.touched.email && form.errors.email}
            containerClass={classes.inputContainer}
            inputClass={classes.input}
          />
        </Col>
        <Col md={6}>
          <Input
            label="Phone Number"
            placeholder="Enter your phone number"
            value={form.values.phoneNumber}
            setValue={(val) => form.setFieldValue("phoneNumber", val)}
            error={form.touched.phoneNumber && form.errors.phoneNumber}
            containerClass={classes.inputContainer}
            inputClass={classes.input}
          />
        </Col>
        <Col md={6}>
          <Input
            label="Location"
            placeholder="Enter your location"
            value={form.values.location}
            setValue={(val) => form.setFieldValue("location", val)}
            error={form.touched.location && form.errors.location}
            containerClass={classes.inputContainer}
            inputClass={classes.input}
          />
        </Col>
    

        <Col md={12}>
          <div className={classes.buttonContainer}>
            <Button
              label="Save Changes"
              variant="primary"
              onClick={() => handleSubmit()}
              loading={loading}
            />
            <Button
              label="Update Password"
              variant="outline"
              onClick={() => setShowModal("update-password")}
              loading={loading}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
