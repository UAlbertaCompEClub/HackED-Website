import { takeLatest } from 'redux-saga/effects'
import { REDUCER_ROUTERS as RR } from '../Config/Constants'

//ref by action.payload.__objectNeeded
function* _signUp(payload) { }
function* _signIn(payload) { }
function* _signOut() { }

function* _updateUser(payload) { }
function* _getUser(payload) { }

export default [
    takeLatest(RR.AUTH.CREATE_USER_REQUEST, _signUp),
    takeLatest(RR.AUTH.LOGIN_USER_REQUEST, _signIn),
    takeLatest(RR.AUTH.LOGOUT_USER_REQUEST, _signOut),
    takeLatest(RR.USER.UPDATE_USER_REQUEST, _updateUser),
    takeLatest(RR.USER.GET_USER_REQUEST, _getUser)
]