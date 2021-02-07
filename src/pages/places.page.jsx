import React, { Component } from "react"; 
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import PlacesDetails from "../components/places-component/places-details.component";
import PlaceItems from "../components/places-component/places-items.component";
import { paginationPlaces } from "../redux/places/place.selectors";


class PlacesPage extends Component {
  render() {
    const route = this.props.match
    const data = this.props.places
    return (
      <React.Fragment>
		  <div className='hotel-page'>
			<Switch>
				<Route exact path={`${route.path}/`} render={(props) =>(
					<PlaceItems data={data} title='places' path={route.path} {...props} />
				)}  />
				<Route path={`${route.path}/:placeId`} render={(props) =>(
					<PlacesDetails {...props}/>
				)}  />
			</Switch>
		</div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => ({
    places : paginationPlaces(state)
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesPage);