import { SET_PLACE_FILTERS, SET_PAGE_NUMBER_PLACES } from "./place.actionTypes"



export const setPlaceFilter = (filters) =>{
    return ({
        type: SET_PLACE_FILTERS,
        payload: filters
    })
}

export const setPageNumber = (pageNumber) =>{
    return ({
        type: SET_PAGE_NUMBER_PLACES,
        payload: pageNumber
    })
}