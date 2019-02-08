import { StateInterface } from "../../../../reducers";
import { connect } from "react-redux";
import UserProfileDropdown from "./UserProfileDropdown";

const mapStateToProps = (state: StateInterface) => {
    return {
        token: state.auth.token,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(UserProfileDropdown)