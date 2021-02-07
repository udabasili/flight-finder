import { SET_HOTEL_FILTERS, SET_PAGE_NUMBER_HOTELS } from "./hotel.actionTypes";


export const setHotelFilter = (filters) =>{
    return ({
        type: SET_HOTEL_FILTERS,
        payload: filters
    })
}


export const setPageNumber = (pageNumber) =>{
    return ({
        type: SET_PAGE_NUMBER_HOTELS,
        payload: pageNumber
    })
}