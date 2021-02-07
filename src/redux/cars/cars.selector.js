import { createSelector } from "reselect";
import { carFilterHandler } from "./cars.utils";


const cars = state => state.cars;

export const carsFilteredSelectors = createSelector(
    [cars],
    (result) =>{
        if(Object.keys(result.filter).length > 0){
            return {
                cars: carFilterHandler(result.filter, result.cars),
                pageNumber: result.pageNumber
            }

        }

        return {
            cars: result.cars,
            pageNumber: result.pageNumber
        }
    }
)


export const paginationCars = createSelector(
    [carsFilteredSelectors],
    (result) =>{
        const pageNumber = result.pageNumber;
        const recordPerPage = 10;
        var begin = ((pageNumber - 1) * recordPerPage);
        var end = begin + recordPerPage;
        return result.cars.slice(begin, end)

    }
)

export const carCount = createSelector(
    [carsFilteredSelectors],
    (result) =>{
        return result.cars.length;
    }
)



export const carById = (id) => createSelector(
    [cars],
    (result) => {
        console.log(id)
        return result.cars.filter((car) =>{
            return Number(car.id) === Number(id)
        })
    }
)