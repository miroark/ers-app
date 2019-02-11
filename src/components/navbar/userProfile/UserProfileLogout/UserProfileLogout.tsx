import * as React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export interface UserProfileLogoutProps {
    logout: () => void
}
 
export interface UserProfileLogoutState {
    
}
 
class UserProfileLogout extends React.Component<UserProfileLogoutProps, UserProfileLogoutState> {
    render() { 
        return ( 
            <React.Fragment>
                <Link to="/home">
                    <Button color='logout' onClick={this.props.logout}>Logout</Button>
                </Link>
            </React.Fragment>
        );
    }
}
 
export default UserProfileLogout;