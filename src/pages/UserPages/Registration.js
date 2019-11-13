import React from 'react';
import { Container, Row, Col } from 'shards-react';
import PageTitle from '../../assets/js/PageTitle';
import Registration from '../../components/UserPages/Registration';

const RegistrationPage = () => (
  <Container fluid className='main-content-container py-4'>
    <Row noGutters className='page-header py-4'>
      <PageTitle
        lg={{ size: 6, offset: 5 }}
        md={{ size: 6, offset: 5 }}
        sm='4'
        title='Registration Page'
        className='text-center'
      />
    </Row>
    <Row>
      <Col
        lg={{ size: 4, offset: 4 }}
        md={{ size: 4, offset: 4 }}
        sm='12'
        className='mb-4'>
        <Registration />
      </Col>
    </Row>
  </Container>
);
export default RegistrationPage;
