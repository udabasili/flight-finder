import React from 'react'
import { connect } from 'react-redux'
import CardList from './hotel-card-list.component'
import Filter from './filter.component'
import Sort from '../collection-component/sort.component'
import CustomHeader from '../custom-header.component'
import { hotelsCount } from '../../redux/hotels/hotel.selectors';
import { setPageNumber } from '../../redux/hotels/hotel.actions'



 function HotelItems({data, path, title, hotelNum, setPageNumber}) {
     const hotels = data
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
                <Sort totalRecords={hotelNum} setPageNumberState={setPageNumberState}/>
                <Filter/>
                <CardList data={hotels}/>
            </div>
        </div>
        </React.Fragment>
        
    )
}


const mapStateToProps = (state) => ({
    hotelNum : hotelsCount(state),
})

const mapDispatchToProps = {
    setPageNumber
}


export default connect(mapStateToProps, mapDispatchToProps)(HotelItems)