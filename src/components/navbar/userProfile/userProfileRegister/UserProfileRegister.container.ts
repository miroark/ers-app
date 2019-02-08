import { connect } from "react-redux";
import { register } from '../../../../actions/AuthActions';
import { StateInterface } from "../../../../reducers";
import UserProfileRegister from "./UserProfileRegister";

const mapStateToProps = (state: StateInterface) => {
  return {
    token: state.auth.token,
    user: state.auth.user
  }
}
  
const mapDispatchToProps = {
  register
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileRegister);
  