import { airportData } from "../../src/data/airlines.data";
import { SET_PAGE_NUMBER_FLIGHTS } from "../../src/redux/flights/flight.actionTypes";
import flightReducer from "../../src/redux/flights/flight.reducer";

const initialState = {
    flights: airportData,
    filter: {},
    pageNumber: 1

}

test('should return default state when no action is passed', () => {
    let result = {filter: {}}
    const newState = flightReducer(initialState, {})
    expect(newState.filter).toMatchObject(result)

})


test('should return the number upon receiving action of type SET_PAGE_NUMBER_FLIGHTS', () => {
    initialState.pageNumber = 2
    const newState = flightReducer(undefined, {
        type: SET_PAGE_NUMBER_FLIGHTS
    })
    expect(newState.pageNumber).toBe(2)

})
