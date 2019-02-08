import { StateInterface } from "../../../../reducers";
import { login } from '../../../../actions/AuthActions'
import { connect } from "react-redux";
import UserProfileLogin from "./UserProfileLogin";

const mapStateToProps = (state: StateInterface) => {
    return {
        token : state.auth.token,
        user : state.auth.user
    }
}

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileLogin)