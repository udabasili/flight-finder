import {combineReducers} from 'redux'
import hotelReducer from './hotels/hotel.reducer';
import storageSession from 'redux-persist/lib/storage/session'
import {persistReducer} from "redux-persist";
import flightReducer from './flights/flight.reducer';
import carsReducer from './cars/cars.reducer';
import placeReducer from './places/place.reducer';


const persistConfig = {
    key: "root", 
    storage: storageSession,
}
const rootReducer = combineReducers({
    hotels: hotelReducer,
    flights: flightReducer,
    cars: carsReducer,
    places: placeReducer
})

export default persistReducer(persistConfig, rootReducer)