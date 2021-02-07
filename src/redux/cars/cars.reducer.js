import { cars } from "../../data/cars.data";
import { SET_CARS_FILTER, SET_PAGE_NUMBER_CARS } from "./cars.actionType";


const initialState = {
    cars: cars,
    filter: {},
    pageNumber: 1
}

export default function carsReducer (state = initialState, action) {
  switch (action.type) {
    case SET_CARS_FILTER:
      return{
        ...state,
        filter: action.payload
      }
    case SET_PAGE_NUMBER_CARS:
      return{
        ...state,
        pageNumber: action.payload
      }
    default:
      return state;
  }
}