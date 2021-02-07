import { createSelector } from "reselect";
import { setFilterHandler } from "./places.utils";


const places = state => state.places;

export const placesFilteredSelectors = createSelector(
    [places],
    (result) =>{

        if(Object.keys(result.filter).length > 0){
            return {
                places: setFilterHandler(result.filter, result.places),
                pageNumber: result.pageNumber
            }
        }
        return {
            places: result.places,
            pageNumber: result.pageNumber
        }
    }
)


export const paginationPlaces = createSelector(
    [placesFilteredSelectors],
    (result) =>{
        const pageNumber = result.pageNumber;
        const recordPerPage = 10;
        var begin = ((pageNumber - 1) * recordPerPage);
        var end = begin + recordPerPage;
        return result.places.slice(begin, end)

    }
)

export const placesCount = createSelector(
    [placesFilteredSelectors],
    (result) =>{
        return result.places.length;
    }
)


export const placeById = (id) => createSelector(
    [places],
    (result) => {
        return result.places.filter((place) =>{
            return Number(place.id) === Number(id)
        })
    }
)