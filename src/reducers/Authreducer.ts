import { AuthStateInterface } from '.'
import { authTypes } from '../actions/AuthActions'

const initialState: AuthStateInterface = {
    token: '',
    user: {
        id: 0,
        role: 0,
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    }
}

export const AuthReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case authTypes.LOGIN:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            }
        case authTypes.REGISTER:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            };
        case authTypes.LOGOUT:
            return {
                ...state,
                token: '',
                user: {
                    id: 0,
                    role: 0,
                    username: '',
                    password: '',
                    email: '',
                    firstName: '',
                    lastName: ''
                }
            }
        default:
            return state;
    }
 }