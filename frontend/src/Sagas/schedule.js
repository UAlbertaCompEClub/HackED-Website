import { takeLatest } from 'redux-saga/effects'
import { REDUCER_ROUTERS as RR } from '../Config/Constants'

//ref by action.payload.__objectNeeded
function* _getSchedule() { }

export default [
    takeLatest(RR.SCHEDULE.GET_SCHEDULE_REQUEST, _getSchedule),
]