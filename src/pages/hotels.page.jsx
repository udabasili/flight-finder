import React, { Component } from "react"; 
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import HotelDetails from "../components/hotel-component/hotel-details";
import HotelItems from "../components/hotel-component/hotels-items";
import { paginationHotels } from "../redux/hotels/hotel.selectors";


class HotelsPage extends Component {

  render() {
	const route = this.props.match;
	const data = this.props.hotels;
    return (
      <React.Fragment>
		<div className='hotel-page'>
			<Switch>
				<Route exact path={`${route.path}/`} render={(props) =>(
					<HotelItems data={data} title='hotels' path={route.path} {...props} />
				)}  />
				<Route path={`${route.path}/:hotelId`} render={(props) =>(
					<HotelDetails {...props}/>
				)}  />
			</Switch>
		</div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => ({
    hotels : paginationHotels(state)
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelsPage);
;