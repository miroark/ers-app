import React from 'react';
import Button from 'reactstrap/lib/Button';
import { Modal, ModalBody, ModalFooter, Form } from 'reactstrap';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import Email from '@material-ui/icons/Email';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccountBox from "@material-ui/icons/AccountBox"
import Lock from '@material-ui/icons/Lock';

export interface UserProfileRegisterProps {
    token: string,
    user: {
        id: number,
        role: number,
        username: string,
        email: string,
        password: string,
        firstName: string,
        lastName: string
      },
    register: (credentials: {}) => void
}
 
export interface UserProfileRegisterState {
    modal: boolean,
    credentials : {
        username: string,
        password: string,
        firstName: string,
        lastName: string,
        email: string
    },
    errorFeedback: string
}
 
class UserProfileRegister extends React.Component<UserProfileRegisterProps, UserProfileRegisterState> {
    constructor (props: UserProfileRegisterProps) {
        super(props);
        this.state = {
            modal: false,
            credentials : {
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                email: ''
            },
            errorFeedback: ''
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            ...prevState, 
            modal: !prevState.modal
        }));
    }

    updateField = (event: any) => {
        switch(event.target.id) {
            case 'usernameInput':
                this.setState({
                    credentials: {
                    ...this.state.credentials,
                    username: event.target.value
                    }
                });
                break;
            case 'passwordInput':
                this.setState({
                    credentials: {
                    ...this.state.credentials,
                    password: event.target.value
                    }
                });
                break;
            case 'firstNameInput':
                this.setState({
                    credentials: {
                    ...this.state.credentials,
                    firstName: event.target.value
                    }
                });
                break;
            case 'lastNameInput':
                this.setState({
                    credentials: {
                    ...this.state.credentials,
                    lastName: event.target.value
                    }
                });
                break;
            case 'emailInput':
                this.setState({
                    credentials: {
                    ...this.state.credentials,
                    email: event.target.value
                    }
                });
                break;
            default:
                console.log('ERROR');
                break;
        }
    }

    render() { 
        return ( 
            <React.Fragment>
                <Button color="register" className="btn-register outline" onClick={this.toggle}>Register</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>
                        Register
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={() => this.props.register(this.state.credentials)}>
                            <FormGroup>
                                <Label for="firstNameInput"><AccountBox /></Label>
                                <Input type="text" name="firstName" id="firstNameInput" placeholder="First Name" value={this.state.credentials.firstName} onChange={this.updateField} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastNameInput"><AccountBox /></Label>
                                <Input type="text" name="lastName" id="lastNameInput" placeholder="Last Name" value={this.state.credentials.lastName} onChange={this.updateField} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="emailInput"><Email /></Label>
                                <Input type="email" name="email" id="emailInput" placeholder="example@here.com" value={this.state.credentials.email} onChange={this.updateField} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="usernameInput"><AccountCircle /></Label>
                                <Input type="text" name="username" id="usernameInput" placeholder="Username" value={this.state.credentials.username} onChange={this.updateField} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="passwordInput"><Lock /></Label>
                                <Input type="password" name="password" id="passwordInput" placeholder="Password" value={this.state.credentials.password} onChange={this.updateField} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter className="justify-content-center">
                        <Button color="login" onClick={() => this.props.register(this.state.credentials)}>Register</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
         );
    }
}
 
export default UserProfileRegister;