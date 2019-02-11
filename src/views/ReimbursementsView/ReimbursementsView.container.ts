import { StateInterface } from "../../reducers";
import { connect } from "react-redux";
import ReimbursementsView from "./ReimbursementsView";

const mapStateToProps = (state: StateInterface) => {
    return {
        token: state.auth.token,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(ReimbursementsView);