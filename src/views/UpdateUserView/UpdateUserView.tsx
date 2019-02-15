import * as React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export interface UpdateUserViewProps {
    token: string,
    user: {
        id: number,
        role: number,
        username: string,
        password: string,
        email: string,
        firstName: string,
        lastName: string
    }
}
 
export interface UpdateUserViewState {
    id: number,
    role: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string
}
 
class UpdateUserView extends React.Component<UpdateUserViewProps, UpdateUserViewState> {
    constructor (props: UpdateUserViewProps) {
        super(props);
        this.state={
            id: 0,
            role: 0,
            username: '',
            email: '',
            firstName: '',
            lastName: ''
        }
    }

    idChange = (event: any) => {
        this.setState({
            id: event.currentTarget.value
        });
    }

    usernameChange = (event: any) => {
        this.setState({
            username: event.currentTarget.value
        })
    }

    emailChange = (event: any) => {
        this.setState({
            email: event.currentTarget.value
        })
    }

    firstNameChange = (event: any) => {
        this.setState({
            firstName: event.currentTarget.value
        })
    }

    lastNameChange = (event: any) => {
        this.setState({
            lastName: event.currentTarget.value
        })
    }

    roleChange = (event: any) => {
        this.setState({
            role: event.currentTarget.value
        })
    }

    updateUser = async () => {
        try{
            const url = 'http://ec2-18-221-233-241.us-east-2.compute.amazonaws.com:3000/users';
            const res = await fetch (url,
            {
                method: 'PATCH',
                body: JSON.stringify({
                    updated : {
                        id: this.state.id,
                        username: this.state.username,
                        email: this.state.email,
                        firstName: this.state.firstName,
                        lastName: this.state.lastName
                    }
                }),
                headers: {
                    'x-access-token' : this.props.token,
                    'Content-Type' : 'application/json'
                }
            })

            const body = await res.json();
            if(body.auth) {
                console.log('Successfully submitted');
                console.log(body.user);
            }
            else {
                console.log(`Failed to submit. ${body.message}`)
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    render() { 
        return ( 
            <React.Fragment>
                <Form>
                    <FormGroup>
                        <Label for="idInput">User ID</Label>
                        <Input id="idInput" 
                        value={this.state.id} onChange={this.idChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="roleInput">User Role</Label>
                        <Input id="roleInput" 
                        value={this.state.role} onChange={this.roleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="usernameInput">Username</Label>
                        <Input id="usernameInput" 
                        value={this.state.username} onChange={this.usernameChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="emailInput">User Email</Label>
                        <Input id="emailInput" 
                        value={this.state.email} onChange={this.emailChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="firstNameInput">User First Name</Label>
                        <Input id="firstNameInput" 
                        value={this.state.firstName} onChange={this.firstNameChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastNameInput">User Last Name</Label>
                        <Input id="lastNameInput" 
                        value={this.state.lastName} onChange={this.lastNameChange} />
                    </FormGroup>
                    <FormGroup className="d-flex justify-content-end">
                        <Button color="login" onClick={this.updateUser} id="updateReimbursementButton">Submit</Button>
                    </FormGroup>
                </Form>
            </React.Fragment>
         );
    }
}
 
export default UpdateUserView;