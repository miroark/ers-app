import  React from 'react';
import {Button, Form } from 'reactstrap';
import Modal from 'reactstrap/lib/Modal';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';

export interface UserProfileLoginProps {
    token: string,
    user : {
        id: number,
        role: number,
        username: string,
        password: string,
        email: string,
        firstName: string,
        lastName: string
    },
    login: (credentials: {}) => void
}
 
export interface UserProfileLoginState {
    modal: boolean,
    credentials: {
        username: string,
        password: string
      },
      errorFeedback: string
}
 
// This componenet will build a login modal that displays when clicked
class UserProfileLogin extends React.Component<UserProfileLoginProps, UserProfileLoginState> {
    constructor (props: UserProfileLoginProps) {
        super(props);
        this.state = {
            modal: false,
            credentials : {
                username: '',
                password: ''
            },
            errorFeedback : ''
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            ...prevState, 
            modal: !prevState.modal
        }));
    }

    updateUsername = (event: any) => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            username: event.target.value
          }
        })
      }
    
      updatePassword = (event: any) => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            password: event.target.value
          }
        })
      }

    render() { 
        return (  
            <React.Fragment>
                <Button color="login" onClick={this.toggle}>Login</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={() => this.props.login(this.state.credentials)}>
                            <FormGroup>
                                <Label for="usernameInput"><AccountCircle /></Label>
                                <Input type="text" name="username" id="usernameInput" placeholder="Username" value={this.state.credentials.username} onChange={this.updateUsername}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="passwordInput"><Lock /></Label>
                                <Input type="password" name="password" id="passwordInput" placeholder="Password" value={this.state.credentials.password} onChange={this.updatePassword}/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter className="justify-content-center">
                        <Button type="submit" color="login" onClick={() => this.props.login(this.state.credentials)}>Log in</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}
 
export default UserProfileLogin;