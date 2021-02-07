import { createSelector } from "reselect";
import { hotelFilterHandler } from "./hotel.utils";


const hotels = state => state.hotels;

export const filteredSelectors = createSelector(
    [hotels],
    (result) =>{
        if(Object.keys(result.filter).length > 0){
            return {
                hotels: hotelFilterHandler(result.filter, result.hotelList),
                pageNumber: result.pageNumber
            }
        }

        return {
            hotels: result.hotelList,
            pageNumber: result.pageNumber
        }
    }
)

export const paginationHotels = createSelector(
    [filteredSelectors],
    (result) =>{
        const pageNumber = result.pageNumber;
        const recordPerPage = 10;
        var begin = ((pageNumber - 1) * recordPerPage);
        var end = begin + recordPerPage;
        return result.hotels.slice(begin, end)

    }
)

export const hotelsCount = createSelector(
    [filteredSelectors],
    (result) =>{
        return result.hotels.length;
    }
)

export const hotelById = (id) => createSelector(
    [hotels],
    (result) => {
        return result.hotelList.filter((hotel) =>{
            return Number(hotel.id) === Number(id)
        })
    }
)