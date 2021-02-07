import React, { useState } from 'react';
import Pagination from "react-js-pagination";

function PaginationComponent({totalRecords, setPageNumberState}) {

  // current page
  const [currentPage, setCurrentPage] = useState(1);

  // total records per page to display
  const recordPerPage = 10;

  // total number of the records

  // range of pages in paginator
  const pageRange = 10;

  // handle change event
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    setPageNumberState(pageNumber)
    // call API to get data based on pageNumber
  }

  return (
    <React.Fragment>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={recordPerPage}
        totalItemsCount={totalRecords}
        pageRangeDisplayed={pageRange}
        itemClass='pagination__item'
        innerClass='pagination'
        activeClass='pagination__link-active'
        linkClass='pagination__link'
        onChange={handlePageChange}
      />
    </React.Fragment>
  );
}

export default PaginationComponent;