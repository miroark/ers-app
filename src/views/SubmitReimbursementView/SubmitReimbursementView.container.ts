import { StateInterface } from "../../reducers";
import { connect } from "react-redux";
import SubmitReimbursementView from "./SubmitReimbursementView";

const mapStateToProps = (state: StateInterface) => {
    return {
        token: state.auth.token,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(SubmitReimbursementView);