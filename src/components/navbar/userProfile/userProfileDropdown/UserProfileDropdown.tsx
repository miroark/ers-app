import  React from 'react';
import AdminDropdownComponent from './adminDropdown/AdminDropdownComponenet.container';
import ManagerDropdownComponent from './managerDropdown/ManagerDropdownComponent.container';
import UserDorpdownComponentContainer from './userDropdown/UserDorpdownComponent.container';

export interface UserProfileDropdownProps {
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
 
export interface UserProfileDropdownState {
    
}
 
// This component will build a drop down based on the users credentials.
class UserProfileDropdown extends React.Component<UserProfileDropdownProps, UserProfileDropdownState> {
    constructor (props: UserProfileDropdownProps) {
        super(props);
    }

    render() { 
        if(this.props.user.role === 1){
            return (
                <UserDorpdownComponentContainer />
            )
        }
        else if(this.props.user.role === 2){
            return (
                <ManagerDropdownComponent />
            )
        }
        else if(this.props.user.role === 3){
            return (
                <AdminDropdownComponent />
            )
        }
        else {
            return <div>ERROR</div>
        }
    }
}
 
export default UserProfileDropdown;