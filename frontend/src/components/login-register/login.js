import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Input from '../common/input';

export default class Login extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false,
            mobileNumber: '',
            password: ''
        };
    }

    changeField = (key, value) => {
        this.setState({
            [key]: value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isSubmitted: true
        });

        const {
            mobileNumber,
            password
        } = this.state;

        const requiredFields =  mobileNumber && password;
        if (!requiredFields) {
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
        const {isSubmitted} = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Input
                    errorMessage='Please enter mobile number!'
                    isSubmitted={isSubmitted}
                    label='Mobile Number'
                    max={10}
                    min={10}
                    name='mobileNumber'
                    onChange={this.changeField}
                    placeholder='Enter your mobile number'
                    type='number'
                />
                <Input
                    errorMessage='Please enter password!'
                    isSubmitted={isSubmitted}
                    label='Password'
                    name='password'
                    onChange={this.changeField}
                    placeholder='Password'
                    type='password'
                />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}