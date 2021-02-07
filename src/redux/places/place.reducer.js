import { places } from "../../data/places.data";
import { SET_PLACE_FILTERS, SET_PAGE_NUMBER_PLACES } from "./place.actionTypes";


const initialState = {
    places,
    filter: {},
    pageNumber: 1

}

export default function placeReducer (state = initialState, action) {
  switch (action.type) {
    case SET_PLACE_FILTERS:
      return{
        ...state,
        filter: action.payload
      }
    case SET_PAGE_NUMBER_PLACES:
      return{
        ...state,
        pageNumber: action.payload
      }
    default:
      return state;
  }
}