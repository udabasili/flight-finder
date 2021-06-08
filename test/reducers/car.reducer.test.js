import { cars } from "../../src/data/cars.data";
import carsReducer from "../../src/redux/cars/cars.reducer";
import { SET_PAGE_NUMBER_CARS } from "../../src/redux/cars/cars.actionType";

const initialState = {
    cars: cars,
    filter: {},
    pageNumber: 1
}

test('should return default state when no action is passed', () => {
    let result = {filter: {}}
    const newState = carsReducer(initialState, {})
    expect(newState.filter).toMatchObject(result)

})


test('should return the number upon receiving action of type SET_PAGE_NUMBER_CARS', () => {
    initialState.pageNumber = 2
    const newState = carsReducer(undefined, {
        type: SET_PAGE_NUMBER_CARS
    })
    expect(newState.pageNumber).toBe(2)

})
