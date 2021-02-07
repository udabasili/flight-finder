import React from 'react'
import { connect } from 'react-redux'
import CardList from './cars-card-list.component'
import Filter from './filter.component'
import Sort from '../collection-component/sort.component'
import CustomHeader from '../custom-header.component'
import { carCount } from '../../redux/cars/cars.selector';
import { setPageNumber } from '../../redux/cars/cars.action'



 function CarItems({data, path, title, carNum, setPageNumber}) {
     const cars = data
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
                <Sort totalRecords={carNum} setPageNumberState={setPageNumberState}/>
                <Filter/>
                <CardList data={cars}/>
            </div>
        </div>
        </React.Fragment>
        
    )
}



const mapStateToProps = (state) => ({
    carNum : carCount(state),
})

const mapDispatchToProps = {
    setPageNumber
}


export default connect(mapStateToProps, mapDispatchToProps)(CarItems)