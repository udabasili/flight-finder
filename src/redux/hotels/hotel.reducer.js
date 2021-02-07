import { hotels } from "../../data/hotels.data";
import { SET_HOTEL_FILTERS, SET_PAGE_NUMBER_HOTELS } from "./hotel.actionTypes";


const initialState = {
    hotelList: hotels,
    filter: {},
    pageNumber: 1
}

export default function hotelReducer (state = initialState, action) {
  switch (action.type) {
    case SET_HOTEL_FILTERS:
      return{
        ...state,
        filter: action.payload
      }
    case SET_PAGE_NUMBER_HOTELS:
      return{
        ...state,
        pageNumber: action.payload
      }
    default:
      return state;
  }
}