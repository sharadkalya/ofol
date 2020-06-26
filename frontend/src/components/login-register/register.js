import React from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Input from '../common/input';

class Register extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            first: '',
            isSubmitted: false,
            last: '',
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
            first,
            last,
            mobileNumber,
            password
        } = this.state;
        const requiredFields = first && last && mobileNumber && password;

        if (!requiredFields) {
            return;
        }

        const details = {
            first,
            last,
            mobileNumber,
            password
        };
        const { history, onRegister} = this.props;

        onRegister(details, history);
    };

    render() {
        const { isSubmitted } = this.state;

        return (
            <>
                <Form onSubmit={this.onSubmit}>
                    <Input
                        errorMessage='Please enter your first name!'
                        isSubmitted={isSubmitted}
                        label='First'
                        name='first'
                        onChange={this.changeField}
                        placeholder='Enter your first name'
                        type='text'
                    />
                    <Input
                        errorMessage='Please enter your last name!'
                        isSubmitted={isSubmitted}
                        label='Last'
                        name='last'
                        onChange={this.changeField}
                        placeholder='Enter your last name'
                        type='text'
                    />
                    <Input
                        errorMessage='Enter your mobile number!'
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
                        errorMessage='Please enter password(Min length is 5)'
                        isSubmitted={isSubmitted}
                        label='Password'
                        min={5}
                        name='password'
                        onChange={this.changeField}
                        placeholder='Password'
                        type='password'
                    />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        );
    }
}

Register.propTypes = {
    history: PropTypes.objectOf(PropTypes.object).isRequired,
    onRegister: PropTypes.func.isRequired
};

export default Register;
