// import React from 'react'

const Pagination = (pageNo,{setPageNo}) => {
  return (
    <div>
      <h6>Page No : {pageNo}</h6>
      <div className="card__wrapper__btns">
        <button
          className="btn"
          onClick={() => setPageNo((pageNo) => pageNo - 1)}
        >
          Previous
        </button>
        <button
          className="btn"
          onClick={() => setPageNo((pageNo) => pageNo + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination