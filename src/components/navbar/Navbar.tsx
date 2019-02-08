import React from 'react';
import NavbarHeader from './NavbarHeader';
import UserProfileComponent from './userProfile/UserProfileComponent.container';

export interface NavbarProps {

}
 
export interface NavbarState {
  
}
 
class Navbar extends React.Component<NavbarProps, NavbarState> {
  state = {  }
  render() { 
    return ( 
      <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
          <NavbarHeader />
          <UserProfileComponent />
      </nav>
     );
  }
}
 
export default Navbar;