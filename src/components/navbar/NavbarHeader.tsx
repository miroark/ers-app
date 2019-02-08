import  React from 'react';
import { Link } from 'react-router-dom';
import RevLogo from '../../assets/rev-logo.png';
import { Icon } from '@material-ui/core';

export interface NavbarHeaderProps {
    
}
 
export interface NavbarHeaderState {
    
}
 
class NavbarHeader extends React.Component<NavbarHeaderProps, NavbarHeaderState> {
    constructor(props: NavbarHeaderProps) {
        super(props);
    }

    render() { 
        return ( 
            <div className="navbar-header c-pointer shift-left">
                <Link to="/home" className="unset-anchor">
                    <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature" />
                </Link>
            </div>
         );
    }
}
 
export default NavbarHeader;