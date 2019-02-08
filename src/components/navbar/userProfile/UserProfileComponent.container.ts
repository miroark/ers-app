import { StateInterface } from "../../../reducers";
import { connect } from "react-redux";
import UserProfileComponent from "./UserProfileComponent";

const mapStateToProps = (state: StateInterface) => {
    return {
        token: state.auth.token,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(UserProfileComponent)