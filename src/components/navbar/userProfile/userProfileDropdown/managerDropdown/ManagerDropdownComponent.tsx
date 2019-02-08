import * as React from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import UserProfileLogout from '../UserProfileLogout/UserProfileLogout';

export interface ManagerDropdownComponentProps {
    token: string,
    user: {
        id: number,
        role:number,
        username: string,
        password: string,
        email: string,
        firstName: string,
        lastName: string
    }
}
 
export interface ManagerDropdownComponentState {
    dropdownOpen: boolean
}
 
class ManagerDropdownComponent extends React.Component<ManagerDropdownComponentProps, ManagerDropdownComponentState> {
    state = {
        dropdownOpen: false
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }
    
    render() { 
        return ( 
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                {this.props.user.username}
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem header>Users</DropdownItem>
                    <LinkContainer to='/profile'>
                        <DropdownItem>View my information</DropdownItem>
                    </LinkContainer>
                    <LinkContainer to='/view-all-users'>
                        <DropdownItem>View all users</DropdownItem>
                    </LinkContainer>
                    <LinkContainer to='/user-by-id'>
                        <DropdownItem>View user by id</DropdownItem>
                    </LinkContainer>
                    <LinkContainer to='update-user'>
                        <DropdownItem>Update user information</DropdownItem>
                    </LinkContainer>
                    <DropdownItem divider />
                    <DropdownItem header>Reimbursements</DropdownItem>
                    <LinkContainer to='/submit'>
                        <DropdownItem>Submit a reimbursement</DropdownItem>
                    </LinkContainer>
                    <LinkContainer to='/reimbursements'>
                        <DropdownItem>View my reimbursements</DropdownItem>
                    </LinkContainer>
                    <LinkContainer to='all-reimbursements'>
                        <DropdownItem>View all reimbursements</DropdownItem>
                    </LinkContainer>
                    <LinkContainer to='reimbursements-status'>
                        <DropdownItem>View reimbursements by status</DropdownItem>
                    </LinkContainer>
                    <LinkContainer to='reimbursements-author'>
                        <DropdownItem>View reimbursements by author</DropdownItem>
                    </LinkContainer>
                    <DropdownItem><UserProfileLogout /></DropdownItem>
                </DropdownMenu>
            </Dropdown>
         );
    }
}

export default ManagerDropdownComponent;