import { hotels } from "../../src/data/hotels.data";
import hotelReducer from "../../src/redux/hotels/hotels.reducer";
import { SET_PAGE_NUMBER_HOTELS } from "../../src/redux/hotels/hotels.actionType";

const initialState = {
    hotels: hotels,
    filter: {},
    pageNumber: 1
}

test('should return default state when no action is passed', () => {
    let result = {filter: {}}
    const newState = hotelReducer(initialState, {})
    expect(newState.filter).toMatchObject(result)

})


test('should return the number upon receiving action of type SET_PAGE_NUMBER_HOTELS', () => {
    initialState.pageNumber = 2
    const newState = hotelReducer(undefined, {
        type: SET_PAGE_NUMBER_HOTELS
    })
    expect(newState.pageNumber).toBe(2)

})
