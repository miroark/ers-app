import * as React from 'react';
import { Button } from 'reactstrap';

export interface UserProfileLogoutProps {
    
}
 
export interface UserProfileLogoutState {
    
}
 
class UserProfileLogout extends React.Component<UserProfileLogoutProps, UserProfileLogoutState> {
    render() { 
        return ( 
            <React.Fragment>
                <Button color='logout'>Logout</Button>
            </React.Fragment>
        );
    }
}
 
export default UserProfileLogout;