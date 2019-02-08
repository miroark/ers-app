import * as React from 'react';
import Table from 'reactstrap/lib/Table';
import { TableBody, TableRow, TableCell, TableHead } from '@material-ui/core';

export interface ProfileViewProps {
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
 
export interface ProfileViewState {
    
}
 
class ProfileView extends React.Component<ProfileViewProps, ProfileViewState> {
    render() { 
        return (  
            <div>
                <h1>Hello, {this.props.user.firstName} {this.props.user.username}</h1>
                <Table>
                <TableHead>
                        <TableRow>
                            <TableCell>
                                Id
                            </TableCell>
                            <TableCell>
                                Role
                            </TableCell>
                            <TableCell>
                                Username
                            </TableCell>
                            <TableCell>
                                Hashed Password
                            </TableCell>
                            <TableCell>
                                Email
                            </TableCell>
                            <TableCell>
                                First Name
                            </TableCell>
                            <TableCell>
                                Last Name
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                {this.props.user.id}
                            </TableCell>
                            <TableCell>
                                {this.props.user.role}
                            </TableCell>
                            <TableCell>
                                {this.props.user.username}
                            </TableCell>
                            <TableCell>
                                {this.props.user.password}
                            </TableCell>
                            <TableCell>
                                {this.props.user.email}
                            </TableCell>
                            <TableCell>
                                {this.props.user.firstName}
                            </TableCell>
                            <TableCell>
                                {this.props.user.lastName}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }
}
 
export default ProfileView;