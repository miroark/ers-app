import * as React from 'react';
import { Form, Input, Button, Table } from 'reactstrap';
import { TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';

export interface UserIdViewProps {
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
 
export interface UserIdViewState {
    id: number,
    data: {}
}
 
class UserIdView extends React.Component<UserIdViewProps, UserIdViewState> {
    constructor(props: UserIdViewProps){
        super(props);
        this.state = {
            data: {},
            id: 0
        }
    }

    parseRole = (entry: number) => {
        switch(entry) {
            case 1:
                return 'User';
            case 2:
                return 'Financial Manager';
            case 3:
                return 'Admin';
            default:
                return '';
        }
    }

    renderUser = (user: any) => {
        return (
            <TableRow>
                <TableCell>{user.id}</TableCell>
                <TableCell>{this.parseRole(user.role)}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
            </TableRow>
        )
    } 
    
    fetchUser = async () => {
        try{
            const url = 'http://ec2-18-221-233-241.us-east-2.compute.amazonaws.com:3000/users/' + this.state.id;
            const res = await fetch (url,
            {
                method: 'GET',
                headers: {
                    'x-access-token' : this.props.token
                }
            })
            const body = await res.json();
            if(body.auth && body.user) {
                this.setState({
                    data: body.user
                });
            }
            else {
                this.setState({
                    data: {}
                });
                console.log('Authorization failed.');
                console.log(body.message);
            }
        }
        catch (err) {
            console.log(err);
            this.setState({
                data: {}
            });
        }
    }

    userIdChanged = (event: any) => {
        this.setState({
            id: event.target.value
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <Form onSubmit={this.fetchUser}>
                    <Input id="authorSearchInput" 
                    value={this.state.id} onChange={this.userIdChanged}/>
                    <Button color='login' onClick={this.fetchUser}>Search</Button>
                </Form> 
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.renderUser(this.state.data)}
                    </TableBody>
                </Table>
            </React.Fragment>
         );
    }
}
 
export default UserIdView;