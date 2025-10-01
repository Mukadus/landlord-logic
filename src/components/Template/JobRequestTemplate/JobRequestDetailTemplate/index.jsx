import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from './JobRequestDetailTemplate.module.css'
import BreadCrumbSection from '@/components/organisms/BreadCrumbSection'

const JobRequestDetailTemplate = ( {slug = ""} ) => {
  return (
    <Container fluid>
      <Row>
      <Col lg={12} className={classes.breadCrumbSection}>
          <BreadCrumbSection
            title="Job Requests"
            title2="Maintenance Details"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default JobRequestDetailTemplate