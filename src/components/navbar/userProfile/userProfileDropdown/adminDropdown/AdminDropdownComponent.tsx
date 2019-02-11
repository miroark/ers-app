import * as React from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';

export interface AdminDropdownComponentProps {
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
 
export interface AdminDropdownComponentState {
    dropdownOpen: boolean
}
 
class AdminDropdownComponent extends React.Component<AdminDropdownComponentProps, AdminDropdownComponentState> {
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
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="dropdown-inline">
                <DropdownToggle color="login" caret>
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
                    <LinkContainer to='/update-user'>
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
                    <LinkContainer to='/all-reimbursements'>
                        <DropdownItem>View all reimbursements</DropdownItem>
                    </LinkContainer>
                    <LinkContainer to='/reimbursements-status'>
                        <DropdownItem>View reimbursements by status</DropdownItem>
                    </LinkContainer>
                    <LinkContainer to='/reimbursements-author'>
                        <DropdownItem>View reimbursements by author</DropdownItem>
                    </LinkContainer>
                    <LinkContainer to='/reimbursement-update'>
                        <DropdownItem>Update reimbursement</DropdownItem>
                    </LinkContainer>
                </DropdownMenu>
            </Dropdown>
         );
    }
}

export default AdminDropdownComponent;