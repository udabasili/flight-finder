import React from 'react'
import PaginationComponent from '../pagnation.component'

export default function Sort({totalRecords, setPageNumberState = f => f}) {
    return (
        <div className='sort'>
            <PaginationComponent totalRecords={totalRecords} setPageNumberState={setPageNumberState}/>
        </div>
    )
}
