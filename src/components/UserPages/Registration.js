import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Button
} from 'shards-react';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      userName: ''
    };
  }

  componentDidMount() {
    localStorage.removeItem('user_id');
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.history.push('/login'); // need to remove after API integration
    fetch('/api/registration', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status === 200) {
          this.props.history.push('/login');
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        //alert('Error in Registration please try again');
      });
  };

  render() {
    return (
      <ListGroup flush>
        <ListGroupItem className='p-3'>
          <Row>
            <Col>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <label htmlFor='feUserName'>User Name</label>
                  <FormInput
                    type='text'
                    name='userName'
                    placeholder='Enter username'
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor='feEmailAddress'>Email</label>
                  <FormInput
                    id='feEmailAddress'
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor='fePassword'>Password</label>
                  <FormInput
                    id='fePassword'
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    required
                  />
                </FormGroup>
                <Row form>
                  <Col md='6' className='form-group'>
                    <Button type='submit' value='Submit'>
                      Registration
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    );
  }
}
export default withRouter(Registration);
