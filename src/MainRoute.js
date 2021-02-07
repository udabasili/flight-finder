import React, { Component } from "react"; 
import {Route, Switch} from 'react-router-dom'
import Footer from "./components/footer.component";
import Navigation from "./components/navigation.component";
import CarRentalPage from "./pages/car-rental.page";
import FlightPage from "./pages/flights.page";
import HomePage from "./pages/home.page";
import HotelsPage from "./pages/hotels.page";
import PlacesPage from "./pages/places.page";
import ProfilePage from "./pages/profile.page";


class MainRoute extends Component {
  render() {
    return (
     <React.Fragment>
       <Navigation/>
       <main>
          <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/flights" component={FlightPage}/>
              <Route path="/hotels" component={HotelsPage}/>
              <Route path="/car-rental" component={CarRentalPage}/>
              <Route path="/profile" component={ProfilePage}/>
              <Route path="/places" component={PlacesPage}/>
        </Switch>
       </main>
       <Footer/>
     </React.Fragment>
    );
  }
}

export default MainRoute;