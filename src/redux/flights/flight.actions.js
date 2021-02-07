import { SET_FLIGHT_FILTERS, SET_PAGE_NUMBER_FLIGHTS  } from "./flight.actionTypes";

export const setFlightFilter = (filters) =>{
    return ({
        type: SET_FLIGHT_FILTERS,
        payload: filters
    })
}

export const setPageNumber = (pageNumber) =>{
    return ({
        type: SET_PAGE_NUMBER_FLIGHTS,
        payload: pageNumber
    })
}