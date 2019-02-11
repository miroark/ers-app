import { logout } from '../../../../actions/AuthActions'
import { connect } from 'react-redux';
import UserProfileLogout from './UserProfileLogout';
import { StateInterface } from '../../../../reducers';

const mapStateToProps = (state: StateInterface) => {
    return {}
}

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileLogout);