import { combineReducers } from 'redux';
import { AuthReducer} from './Authreducer'

export interface AuthStateInterface {
  token: string
  user: {
    id: number,
    role: number,
    username: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string
  }
}

export interface StateInterface {
  auth: AuthStateInterface
}

export const state = combineReducers<StateInterface>({
  auth: AuthReducer
})