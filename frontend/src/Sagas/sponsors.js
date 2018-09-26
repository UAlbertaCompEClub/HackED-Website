import { takeLatest } from 'redux-saga/effects'
import { REDUCER_ROUTERS as RR } from '../Config/Constants'

//ref by action.payload.__objectNeeded
function* _registerSponsorForEvent(payload) { }
function* _getSponsorsForEvent(payload) { }


export default [
    takeLatest(RR.SPONSORS.GET_SPONSORS_REQUEST, _getSponsorsForEvent),
    takeLatest(RR.SPONSORS.REGISTER_SPONSOR_FOR_EVENT_REQUEST, _registerSponsorForEvent),
]