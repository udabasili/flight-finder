import React, { Component } from "react"; 
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import CarsDetails from "../components/cars-component/cars-details";
import CarItems from "../components/cars-component/cars-items";
import { paginationCars } from "../redux/cars/cars.selector";



class CarsRentalPage extends Component {
  render() {
    const route = this.props.match
    const data = this.props.cars
    return (
      <React.Fragment>
		<div className='hotel-page'>
			<Switch>
				<Route exact path={`${route.path}/`} render={(props) =>(
					<CarItems data={data} title='cars' path={route.path} {...props} />
				)}  />
				<Route path={`${route.path}/:carId`} render={(props) =>(
					<CarsDetails {...props}/>
				)}  />
			</Switch>
		</div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => ({
    cars : paginationCars(state)
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsRentalPage);