import { StateInterface } from "../../reducers";
import { connect } from "react-redux";
import AllReimbursementsView from "./AllReimbursementsView";

const mapStateToProps = (state: StateInterface) => {
    return {
        token: state.auth.token,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(AllReimbursementsView);