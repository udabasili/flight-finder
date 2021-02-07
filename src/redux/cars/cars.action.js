import { SET_CARS_FILTER, SET_PAGE_NUMBER_CARS } from "./cars.actionType";

export const setCarsFilter = (filters) =>{
    return ({
        type: SET_CARS_FILTER,
        payload: filters
    })
}

export const setPageNumber = (pageNumber) =>{
    return ({
        type: SET_PAGE_NUMBER_CARS,
        payload: pageNumber
    })
}