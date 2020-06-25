import React from 'react';
import { Button, Form } from 'react-bootstrap';
export default class Login extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            mobileNumber: '',
            password: ''
        };
    }

    changeField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const {
            mobileNumber,
            password
        } = this.state;

        const requiredFields = mobileNumber && password;

        if (!requiredFields) {
            alert('Please fill all mandatory fields');
            return;
        }

        if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
            alert('Invalid mobile number')
            return;
        }

        if (password.length < 5) {
            alert('Password length should be minimum 5');
            return;
        }

        const details = {
            mobileNumber,
            password
        };
        const { history } = this.props;

        this.props.onLogin(details, history);
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your mobile number"
                        onChange={this.changeField}
                        value={this.state.mobileNumber}
                        name='mobileNumber'
                    />
                </Form.Group>
                <Form.Group onChange={this.changePassword}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={this.changeField}
                        value={this.state.password}
                        name='password'
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}