import { createSelector } from "reselect";
import { flightFilterHandler } from "./flight.utils";


const flights = state => state.flights;

export const flightFilteredSelectors = createSelector(
    [flights],
    (result) =>{
        if(Object.keys(result.filter).length > 0){
            return {
                flights: flightFilterHandler(result.filter, result.flights),
                pageNumber: result.pageNumber
            }
        }
        return {
            flights: result.flights,
            pageNumber: result.pageNumber
        }
    }
)



export const paginationFlights = createSelector(
    [flightFilteredSelectors],
    (result) =>{
        const pageNumber = result.pageNumber;
        const recordPerPage = 10;
        var begin = ((pageNumber - 1) * recordPerPage);
        var end = begin + recordPerPage;
        return result.flights.slice(begin, end)

    }
)

export const flightCount = createSelector(
    [flightFilteredSelectors],
    (result) =>{
        return result.flights.length;
    }
)


export const flightById = (id) => createSelector(
    [flights],
    (result) => {
        return result.flights.filter((flight) =>{
            return Number(flight.id) === Number(id)
        })
    }
)