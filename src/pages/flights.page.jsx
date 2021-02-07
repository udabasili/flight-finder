import React, { Component } from "react"; 
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import FlightDetails from "../components/flight-component/flight-details.component";
import FlightItems from "../components/flight-component/flight-items.component";
import { paginationFlights } from "../redux/flights/flight.selectors";


class FlightPage extends Component {
  render() {
    const route = this.props.match
    const data = this.props.flights
    return (
      <React.Fragment>
		<div className='hotel-page'>
			<Switch>
				<Route exact path={`${route.path}/`} render={(props) =>(
					<FlightItems data={data} title='flights' path={route.path} {...props} />
				)}  />
				<Route path={`${route.path}/:flightId`} render={(props) =>(
					<FlightDetails {...props}/>
				)}  />
			</Switch>
		</div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => ({
    flights : paginationFlights(state)
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightPage);