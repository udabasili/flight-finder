import React from 'react'
import Filter from './filter.component'
import CustomHeader from '../custom-header.component'
import FlightCardList from './flight-card-list.component'
import { setPageNumber } from '../../redux/flights/flight.actions'
import { flightCount } from '../../redux/flights/flight.selectors'
import { connect } from 'react-redux'
import Sort from '../collection-component/sort.component'


 function FlightItems({data, path, title, flightNum, setPageNumber}) {

    const setPageNumberState = (pageNumber) =>{
        setPageNumber(pageNumber)
    }
    
    React.useEffect(() => {
        setPageNumber(1)
    }, [])

    return (
        <React.Fragment>
            <CustomHeader title={title} link={path}/>
			<div className='container'>
            <div className='collection-items'>
                <Sort totalRecords={flightNum} setPageNumberState={setPageNumberState}/>
                <Filter/>
                <FlightCardList data={data}/>
            </div>
        </div>
        </React.Fragment>
        
    )
}



const mapStateToProps = (state) => ({
    flightNum : flightCount(state),
})

const mapDispatchToProps = {
    setPageNumber
}


export default connect(mapStateToProps, mapDispatchToProps)(FlightItems)