import * as React from 'react';
import { Table } from 'reactstrap';
import { TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

export interface AllUsersViewProps {
    token : string,
    user: {
        id: number,
        role: number,
        username: string,
        password: string,
        email:string,
        firstName: string,
        lastName: string
    }
}
 
export interface AllUsersViewState {
    data: []
}
 
class AllUsersView extends React.Component<AllUsersViewProps, AllUsersViewState> {
    constructor(props: AllUsersViewProps){
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        try{
            const url = 'http://ec2-18-222-133-80.us-east-2.compute.amazonaws.com:3000/users';
            const res = await fetch (url,
            {
                method: 'GET',
                headers: {
                    'x-access-token' : this.props.token
                }
            })
            const body = await res.json();
            if(body.auth) {
                this.setState({
                    data: body.users
                });
            }
            else {
                this.setState({
                    data: []
                });
                console.log('Authorization failed.');
                console.log(body.message);
            }
        }
        catch (err) {
            console.log(err);
            this.setState({
                data: []
            });
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
                return 'DB_ERROR';
        }
    }
    
    render() { 
        return ( 
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        this.state.data.map((entry: any) => {
                            return (
                                <TableRow>
                                    <TableCell>{entry.id}</TableCell>
                                    <TableCell>{this.parseRole(entry.role)}</TableCell>
                                    <TableCell>{entry.username}</TableCell>
                                    <TableCell>{entry.password}</TableCell>
                                    <TableCell>{entry.email}</TableCell>
                                    <TableCell>{entry.firstName}</TableCell>
                                    <TableCell>{entry.lastName}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
         );
    }
}
 
export default AllUsersView;