import React from 'react';
import UserProfileLogin from './userProfileLogin/UserProfileLogin.container';
import UserProfileDropdown from './userProfileDropdown/UserProfileDropdown.container';
import UserProfileRegister from './userProfileRegister/UserProfileRegister.container';
import UserProfileLogout from './UserProfileLogout/UserProfileLogout.container';

export interface UserProfileComponentProps {
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
 
export interface UserProfileComponentState {

}
 
class UserProfileComponent extends React.Component<UserProfileComponentProps, UserProfileComponentState> {
    constructor(props: UserProfileComponentProps) {
        super(props);
    }
    
    render() { 
        if (this.props.token){
            // The user is already logged in. Give them access to their profile, and tickets
            return ( 
                <div className="ml-auto p-2" id="user-profile-auth">
                    <UserProfileDropdown />
                    <UserProfileLogout />
                </div>
                );
        } else {
            // User needs to log in. Give them a login modal and toggle button.
            return (
                <div className="ml-auto p-2" id="user-profile-auth">
                    <UserProfileLogin />
                    <UserProfileRegister />
                </div>
                );
        }
    }
}
 
export default UserProfileComponent;