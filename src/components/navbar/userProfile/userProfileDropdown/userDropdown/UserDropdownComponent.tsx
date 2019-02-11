import * as React from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';

export interface UserDropdownComponentProps {
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
 
export interface UserDropdownComponentState {
    dropdownOpen: boolean
}
 
class UserDropdownComponent extends React.Component<UserDropdownComponentProps, UserDropdownComponentState> {
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
                    <DropdownItem divider />
                    <DropdownItem header>Reimbursements</DropdownItem>
                    <LinkContainer to='/submit'>
                        <DropdownItem>Submit a reimbursement</DropdownItem>
                    </LinkContainer>
                    <LinkContainer to='/reimbursements'>
                        <DropdownItem>View my reimbursements</DropdownItem>
                    </LinkContainer>
                </DropdownMenu>
            </Dropdown>
         );
    }
}
 
export default UserDropdownComponent;