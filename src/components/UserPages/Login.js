import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    if (JSON.parse(localStorage.getItem('user_id')) !== null) {
      this.props.history.push('/Dashboard');
    }
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    localStorage.setItem(
      'user_id',
      JSON.stringify('eyJzdWIiOiJlYjhkYWYwNy0zYjk4LTRhMTEtOTYwZC00M')
    ); // temporary purpose , just to add some token to localstorage
    this.props.history.push('/Dashboard');
    fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem('user_id', JSON.stringify(res.token));
          this.props.history.push('/Dashboard');
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        // alert('Error logging in please try again');
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
                      Login
                    </Button>
                  </Col>
                  <Col md='6'>
                    <Link type='submit' to='/Registration'>
                      Registration
                    </Link>
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
export default withRouter(Login);
