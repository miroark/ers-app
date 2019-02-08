import { StateInterface } from "../../../../../reducers";
import { connect } from "react-redux";
import ManagerDropdownComponent from "./ManagerDropdownComponent";

const mapStateToProps = (state: StateInterface) => {
    return {
        token: state.auth.token,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(ManagerDropdownComponent);