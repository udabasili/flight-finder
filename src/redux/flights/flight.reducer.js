import { airportData } from "../../data/airlines.data";
import { SET_FLIGHT_FILTERS, SET_PAGE_NUMBER_FLIGHTS  } from "./flight.actionTypes";


const initialState = {
    flights: airportData,
    filter: {},
    pageNumber: 1

}

export default function flightReducer (state = initialState, action) {
  switch (action.type) {
    case SET_FLIGHT_FILTERS:
      return{
        ...state,
        filter: action.payload
      }
    case SET_PAGE_NUMBER_FLIGHTS:
      return{
        ...state,
        pageNumber: action.payload
      }
    default:
      return state;
  }
}