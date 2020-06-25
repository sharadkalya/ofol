import React from 'react';
import { Button, Form } from 'react-bootstrap';
class Register extends React.PureComponent {

    state = {
        first: '',
        last: '',
        mobileNumber: '',
        password: ''
    };

    changeField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const {
            first,
            last,
            mobileNumber,
            password
        } = this.state;

        const requiredFields = first && last && mobileNumber && password;

        if (!requiredFields) {
            alert('Please fill all mandatory fields')
            return;
        }

        if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
            alert('Invalid mobile number');
            return;
        }

        if (password.length < 5) {
            alert('Password length should be minimum 5');
            return;
        }

        const details = {
            first,
            last,
            mobileNumber,
            password
        };
        const { history } = this.props;

        this.props.onRegister(details, history);
    };

    render() {
        return (
            <>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group >
                        <Form.Label>First</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your first name"
                            onChange={this.changeField}
                            value={this.state.first}
                            name='first'
                        />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Last</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your last name"
                            onChange={this.changeField}
                            value={this.state.last}
                            name='last'
                        />
                    </Form.Group>
                    <Form.Group >
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
            </>
        );
    }
}

export default Register;
