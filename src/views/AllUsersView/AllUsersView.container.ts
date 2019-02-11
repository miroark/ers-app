import { StateInterface } from "../../reducers";
import { connect} from "react-redux";
import AllUsersView from "./AllUsersView";

const mapStateToProps = (state: StateInterface) => {
    return {
        token: state.auth.token,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(AllUsersView);