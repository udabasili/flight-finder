import React from 'react'
import Filter from './filter.component'
import CustomHeader from '../custom-header.component'
import Sort from '../collection-component/sort.component'
import PlaceCardList from './places-card-list.component'
import { setPageNumber } from '../../redux/places/place.actions'
import { placesCount } from '../../redux/places/place.selectors'
import { connect } from 'react-redux'


 function PlaceItems({data, path, title, setPageNumber, placeNum}) {
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
                <Sort totalRecords={placeNum} setPageNumberState={setPageNumberState}/>
                <Filter/>
                <PlaceCardList data={data}/>
            </div>
        </div>
        </React.Fragment>
        
    )
}



const mapStateToProps = (state) => ({
    placeNum : placesCount(state),
})

const mapDispatchToProps = {
    setPageNumber
}


export default connect(mapStateToProps, mapDispatchToProps)(PlaceItems)